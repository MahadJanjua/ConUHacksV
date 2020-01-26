// Map and data handling Javascript
const express = require('express')
const fetch = require("node-fetch")
var app = express();
var bodyParser = require('body-parser')
const axios = require('axios');


// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/songs', (req, res) => {
    const URL = 'https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs';
    axios.get(URL, {
      params: {
        "query": "hello"
      },
      headers: {
        "Authorization": "2e8d7cd2f48c9a0ab93d2c45a73013de"
      }
    })
    .then(response => console.log(response.data.songs))
        .catch((error) => console.log(error));
})

app.listen(2800, () => {
 console.log("Server running on port 2800");
});