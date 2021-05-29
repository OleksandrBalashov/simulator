import React from 'react';
import styles from './UserMessages.module.css';
import data from '../../../jsons/data-user.json';

const UserMessages = ({ count }) => {
  return (
    <div className={styles.messageWrap}>
      <div className={styles.backgroundWrap}>
        <p>{data[count].text}</p>
      </div>
      <div>
        <div className={styles.avatar}>
          <span>U</span>
        </div>
      </div>
    </div>
  );
};

export default UserMessages;
