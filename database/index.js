const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repoId: Number, // id
  username: String, // owner.login
  title: String, // name
  url: String, // html_url
  description: String, // description
  forks: Number, // forks_count
  stargazers: Number // stargazers_count
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;