import React from 'react';

const Repo = function(props) {
  return (
  <tr style={{border: '1px solid black'}}>
    <td> {props.username} </td>
    <td> <a href={props.url}>{props.title}</a></td>
    <td> {props.description} </td>
    <td> {props.forks} </td>   
    <td> {props.stargazers} </td> 
  </tr>
  )
}

export default Repo;