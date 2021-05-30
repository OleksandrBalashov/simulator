import React from 'react';
import styles from './AlexMessages.module.css';
import data from '../../../jsons/data-messages.json';

const Messages = ({ count }) => {
  return (
    <div className={styles.chatBlock}>
      <div>
        <img
          src="https://womo.ua/wp-content/uploads/2020/01/imgonline-com-ua-Shape-Q5MWJicSdFd.jpg"
          alt=""
          width="60"
          className={styles.profile}
        />
      </div>

      <div className={styles.wrapContent}>
        <p className={styles.content}>{data[count].text}</p>
      </div>
    </div>
  );
};

export default Messages;
