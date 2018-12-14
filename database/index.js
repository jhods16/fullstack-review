const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repoId: {type: Number, unique: true}, // id
  username: String, // owner.login
  title: String, // name
  url: String, // html_url
  description: String, // description
  forks: Number, // forks_count
  stargazers: Number // stargazers_count
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var parsedRepos = JSON.parse(repos);

  // Repo.insertMany()?

  for (var i = 0; i < parsedRepos.length; i++) {
    var repo = parsedRepos[i];

    repo.id = new Repo ({
      repoId: repo.id,
      username: repo.owner.login,
      title: repo.name,
      url: repo.html_url,
      description: repo.description,
      forks: repo.forks_count,
      stargazers: repo.stargazers_count
    })

    repo.id.save((err, repo) => {
      if (err) {
        return callback(err);
      } else {
        console.log('saved:', repo) 
      }
    })
  }
  callback()
}

let find = (callback) => {

  Repo.find((err, repos) => {
    // console.log('found the repos:', repos);
    callback(repos);
  })
  
}

// find((repos) => {console.log(repos)} )

let deleteAll = (callback) => {
  Repo.deleteMany({}, (err) => {
    if (err) return console.error(err);
  })
}

// deleteAll((repos) => {console.log(repos)} )

module.exports.save = save;