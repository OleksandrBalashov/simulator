import React from 'react';

const OrderedList = ({ data }) => {
  return (
    <ol>
      {data.map(el => (
        <li key={el}>
          <p>{el}</p>
        </li>
      ))}
    </ol>
  );
};

export default OrderedList;
