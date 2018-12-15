import React from 'react';
import Repo from './Repo.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    {props.repos.map((repo) => {
      return <Repo username={repo.username} title={repo.title} url={repo.url} description={repo.description} forks={repo.forks} stargazers={repo.stargazers} />
    })}
  </div>
)

export default RepoList;