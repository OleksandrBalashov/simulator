import React from 'react';
import styles from './UserMessages.module.css';

const UserMessages = ({ message }) => {
  return (
    <div className={styles.chatBlock}>
      <div className={styles.wrapProfile}>
        <p className={styles.content}>{message}</p>
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
