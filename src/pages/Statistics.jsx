import React from 'react';
import styles from './styles/Statistics.module.css';
import data from '../jsons/data-pm-stats.json';

const Statistics = () => {
  return (
    <div className="container">
      <h2 className={styles.wrap}>Статистика</h2>
      <ul>
        {data.map(({ text, img }, i) => (
          <li key={text}>
            <p>{text}</p>
            <img src={img} alt={`stats ${i + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
