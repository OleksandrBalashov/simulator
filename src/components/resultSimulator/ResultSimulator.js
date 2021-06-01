import React from 'react';
import result from '../../jsons/result.json';
import styles from './ResultSimulator.module.css';

const ResultSimulator = () => {
  const { title, list } = result;

  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      {
        <ul>
          {list.map(el => (
            <li key={el}>
              <p>{el}</p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default ResultSimulator;
