const express = require('express');
let app = express();
const helpers = require('../helpers/github.js');
const db = require('../database')
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text());

app.post('/repos', function(req, res, callback) {
  helpers.getReposByUsername(req.body, (result) => {
    db.save(result, (err) => {
      if (err) {
        callback(err)
      } else {
        res.send('done'); 
      }
    })
  })
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
  var top25;

  db.find((repos) => {
    repos.sort(compare);
    top25 = repos.slice(0,24);
    res.send(JSON.stringify(top25))
  })
  
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

var compare = function(a, b) {
  if (a.stargazers < b.stargazers) {
    return 1;
  } else if (a.stargazers > b.stargazers) {
    return -1;
  }
  return 0;
}

// var sortByTopStargazers = function(repos, callback) {
//   repos.sort(compare);
//   callback(repos);
// }
