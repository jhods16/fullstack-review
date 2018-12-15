import React from 'react';

const Repo = function(props) {
  return (
  <tr>
    <td> {props.username} </td>
    <td> {props.title} </td>
    <td> {props.description} </td>
    <td> {props.url} </td>
    <td> {props.forks} </td>   
    <td> {props.stargazers} </td> 
  </tr>
  )
}

export default Repo;