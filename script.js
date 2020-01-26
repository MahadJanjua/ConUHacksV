// Map and data handling Javascript
const express = require('express')
var app = express();
var bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/songID', (req, res) => {
    console.log(req);
})

app.listen(2800);