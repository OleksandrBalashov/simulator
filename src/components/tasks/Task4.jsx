import React, { useState } from 'react';
import styles from './Tasks.module.css';

const Task4 = ({ title, answers, onSubmit }) => {
  const [value, setValue] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = ({ currentTarget: { value, name } }) => {
    setValue({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit();
    setIsVisible(true);
  };

  return (
    <div className={styles.wrap}>
      <h5 className={styles.title}>Задание</h5>
      <p className={styles.text}>{title.title}</p>
      <div className={styles.wrapTasks}>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name={value}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <button typ="submit" className={!value ? 'btn disabled' : 'btn'}>
            Продолжить
          </button>
        </form>
      </div>
      {!isVisible && (
        <p className={styles.disableText}>
          Дайте ответ на задание, чтобы продолжить. Он будет доступен для
          комментирования другими учениками
        </p>
      )}
      {isVisible && (
        <div className={styles.wrapCorrectAnswer}>
          <div className={styles.correctAnswers}>
            <p>{answers.title}</p>
            <ol>
              {answers.list.map(el => (
                <li key={el}>
                  <p>{el}</p>
                </li>
              ))}
            </ol>
            <p>{answers.desc}</p>
          </div>
          <b>Самое время написать Алексу.</b>
        </div>
      )}
    </div>
  );
};

export default Task4;
