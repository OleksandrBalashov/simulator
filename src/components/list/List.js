import React from 'react';
import styles from './List.module.css';

const List = ({ list, desc }) => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {list.map(el => (
          <li key={el}>
            <p>{el}</p>
          </li>
        ))}
      </ul>
      {desc && <h5 className={styles.desc}>{desc}</h5>}
    </div>
  );
};

export default List;
