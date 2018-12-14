const express = require('express');
let app = express();
const helpers = require('../helpers/github.js');
const db = require('../database')

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  helpers.getReposByUsername('jhods16', (result) => {
    db.save(result, (err) => {
      console.log(err)
    })
    // console.log(result);
  })

  res.send('here you go!')
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

