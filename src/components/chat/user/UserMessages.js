import React from 'react';
import styles from './UserMessages.module.css';
import data from '../../../jsons/data-user.json';

const UserMessages = ({ count }) => {
  return (
    <div className={styles.chatBlock}>
      <div className={styles.wrapProfile}>
        <p className={styles.content}>{data[count].text}</p>
      </div>
      <div>
        <div className={styles.profile}>
          <span className={styles.name}>U</span>
        </div>
      </div>
    </div>
  );
};

export default UserMessages;
