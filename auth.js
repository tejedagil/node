var express = require('express');
var app = express();
var fs = require('fs'); 

app.use(`/endpoint`, async (req, res) => {
    try {
        const file = fs.readFileSync(__dirname + `/test.js`, `binary`)
        res.write(file, `binary`);
        res.end()
    } catch (error) {
        return console.log(error);
    }
})

app.get('/', (req, res) => {
    res.write('real#1882');
    res.end();
});

app.listen(443, () => {
    console.log('listening on 127.0.0.1:80');
});