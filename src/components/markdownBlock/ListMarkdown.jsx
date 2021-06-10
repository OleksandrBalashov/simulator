import React from 'react';

const ListMarkdown = ({ content }) => {
  return (
    <ul>
      {content.map(({ title, img, result }) => (
        <li key={title}>
          <p>{title}</p>
          <img src={img} alt={title} width="700" />
          {result && <p>{result}</p>}
        </li>
      ))}
    </ul>
  );
};

export default ListMarkdown;
