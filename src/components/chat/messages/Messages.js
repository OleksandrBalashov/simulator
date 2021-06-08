import React from 'react';
import styles from './Messages.module.css';
import data from '../../../jsons/data-messages.json';

const Messages = ({ message, liza }) => {
  return (
    <div className={styles.chatBlock}>
      <div className={styles.wrapProfile}>
        <img
          src={
            liza
              ? 'https://i.pinimg.com/originals/f9/44/5e/f9445e54b21a158b943b062115a6e96a.jpg'
              : 'https://womo.ua/wp-content/uploads/2020/01/imgonline-com-ua-Shape-Q5MWJicSdFd.jpg'
          }
          alt="profilePhoto"
          width="60"
          height="60"
          className={styles.profile}
        />
      </div>

      <div className={styles.wrapContent}>
        <p className={styles.content}>{message}</p>
      </div>
    </div>
  );
};

export default Messages;
