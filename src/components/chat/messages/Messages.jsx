import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from '../../../redux/auth/auth-selector';
import styles from './Messages.module.css';

const Messages = ({ message, liza }) => {
  const name = useSelector(getUserName);

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
        <p className={styles.content}>
          {message ===
          ', привет! Смотрел вчера отчет от нашего аналитика Джона. Retention январской когорты совсем низкий — только 5% пользователей остаются после недели в продукте.'
            ? `${name}${message}`
            : message}
        </p>
      </div>
    </div>
  );
};

export default Messages;
