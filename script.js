// Map and data handling Javascript
const express = require('express');
var app = express();
var bodyParser = require('body-parser');
const axios = require('axios');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/songs', (req, res) => {
    const URL = 'https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs';
    axios.get(URL, {
      params: {
        "query": req.query.search
      },
      headers: {
        "Authorization": "2e8d7cd2f48c9a0ab93d2c45a73013de"
      }
    })
    .then(response => res.send(response.data.songs))
        .catch((error) => console.log(error));
})

app.get('/playByID', (req, res) => {
    var playUrl;
    const URL = 'https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/' + req.query.id;
    axios.get(URL, {
        headers: {
            "Authorization": "2e8d7cd2f48c9a0ab93d2c45a73013de"
        }
    })
        .then(response => {
            playUrl = 'http://localhost:8080/play?url=' + response.data.playUrl;
            axios.post(playUrl, {
                method: 'post'
            })
                .then(() => {})
                .catch(response => console.log(response, "here"))
        })
        .catch((error) => console.log(error, "NO HERE"));

    
})

app.listen(2800, () => {
 console.log("Server running on port 2800");
});