import React from 'react';
import styles from './Button.module.css';

const Button = ({ handleClick }) => {
  return (
    <div className={styles.wrap}>
      <button className="btn-large" onClick={handleClick}>
        Продолжить
      </button>
    </div>
  );
};

export default Button;
