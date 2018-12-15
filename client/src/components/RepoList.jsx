import React from 'react';
import Repo from './Repo.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <table style={{border: '1px solid black'}}>
      <tbody>
        <tr>
          <td><b> Username </b></td>
          <td><b> Title </b></td>
          <td><b> Description </b></td>
          <td><b> Forks </b></td>
          <td><b> Stargazers </b></td>
        </tr>

    {props.repos.map((repo) => {
      return <Repo username={repo.username} title={repo.title} url={repo.url} description={repo.description} forks={repo.forks} stargazers={repo.stargazers} />
    })}
      </tbody>
    </table>
  </div>
)

export default RepoList;