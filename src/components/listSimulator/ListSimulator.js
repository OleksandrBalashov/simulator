import React from 'react';

const ListSimulator = ({ data }) => (
  <ul>
    {data.map(el => (
      <li key={el}>
        <p>{el}</p>
      </li>
    ))}
  </ul>
);
export default ListSimulator;
