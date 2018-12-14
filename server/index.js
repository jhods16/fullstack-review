const express = require('express');
let app = express();
const helpers = require('../helpers/github.js');
const db = require('../database')
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text());

app.post('/repos', function(req, res, callback) {
  // TODO - your code here!
  helpers.getReposByUsername(req.body, (result) => {
    db.save(result, (err) => {
      if (err) {
        callback(err)
      } else {
        res.send('done'); 
      }
    })
  })
  console.log(req.body)
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

