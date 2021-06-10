import React from 'react';
import styles from './ResultSimulator.module.css';

const ResultSimulator = ({ title, conclusions }) => {
  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      {
        <ul>
          {conclusions.map(el => (
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
