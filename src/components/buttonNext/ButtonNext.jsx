import React from 'react';
import { useHistory } from 'react-router';
import styles from './ButtonNext.module.css';

const ButtonNext = ({ dest }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(dest);
  };

  return (
    <button type="button" className="btn" onClick={handleClick}>
      <div className={styles.wrap}>
        <span className={styles.text}>Далее</span>
        <i className="material-icons">arrow_forward</i>
      </div>
    </button>
  );
};

export default ButtonNext;
