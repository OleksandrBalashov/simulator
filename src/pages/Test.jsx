import React from 'react';
import TestLogo from '../images/test.svg';
import styles from './styles/Test.module.css';

const Test = () => {
  const handleClick = e => {
    console.log('🥇 new Page');
  };
  return (
    <div className={styles.boxTest}>
      <h1 className={styles.title}>
        Пройдите тест на определение профориентации
      </h1>
      <img src={TestLogo} alt="test" className={styles.testLogo} />
      <p className={styles.text}>
        Существует несколько тысяч различных специальностей, и у каждой есть
        своя специфика. Чтобы определиться, что подходит именно вам - пройдите
        наш тест на профориентацию.
      </p>
      <button type="button" className={styles.btn} onClick={handleClick}>
        Начать
      </button>
    </div>
  );
};

export default Test;
