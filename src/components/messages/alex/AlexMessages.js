import React from 'react';
import styles from './AlexMessages.module.css';
import data from '../../../jsons/data-messages.json';

const Messages = ({ count }) => {
  return (
    <div className={styles.messageWrap}>
      <div>
        <img
          src="https://womo.ua/wp-content/uploads/2020/01/imgonline-com-ua-Shape-Q5MWJicSdFd.jpg"
          alt=""
          width="60"
          className={styles.photo}
        />
      </div>

      <div className={styles.backgroundWrap}>
        <p>{data[count].text}</p>
      </div>
    </div>
  );
};

export default Messages;
