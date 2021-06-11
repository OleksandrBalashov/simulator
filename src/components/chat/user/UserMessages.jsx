import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from '../../../redux/auth/auth-selector';
import styles from './UserMessages.module.css';

const UserMessages = ({ message }) => {
  const name = useSelector(getUserName).slice(0, 1);

  return (
    <div className={styles.chatBlock}>
      <div className={styles.wrapProfile}>
        <p className={styles.content}>{message}</p>
      </div>
      <div>
        <div className={styles.profile}>
          <span className={styles.name}>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default UserMessages;
