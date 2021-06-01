import React, { useState } from 'react';
import styles from './Tasks.module.css';

const Tasks = ({
  data: { title, options, checkbox, answers, content },
  onSubmit,
}) => {
  const [value, setValue] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = ({ currentTarget: { value, name } }) => {
    setValue({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(false);
    setIsVisible(true);
    setIsChecked(true);
  };

  return (
    <div className={styles.wrap}>
      <h5 className={styles.title}>Задание</h5>
      <p className={styles.text}>{title.title}</p>
      <div className={styles.wrapTasks}>
        <b className={styles.titleTask}>{title.task}</b>

        <div>
          <form onSubmit={handleSubmit}>
            {options.map(el => (
              <p key={el}>
                <label>
                  <input
                    className={checkbox ? 'filled-in' : 'with-gap'}
                    name="value"
                    type={checkbox ? 'checkbox' : 'radio'}
                    value={el}
                    onChange={handleChange}
                  />
                  <span>{el}</span>
                </label>
              </p>
            ))}
            <button typ="submit" className="btn">
              Продолжить
            </button>
          </form>
        </div>
      </div>
      {!isVisible && (
        <p className={styles.disableText}>
          Дайте ответ на задание, чтобы продолжить
        </p>
      )}
      {isVisible && (
        <div className={styles.wrapCorrectAnswer}>
          {checkbox ? (
            <div className={styles.correctAnswers}>
              {answers.map(el => (
                <p key={el}>{el}</p>
              ))}
            </div>
          ) : (
            <p className={styles.correctAnswer}>{answers}</p>
          )}
        </div>
      )}
      {checkbox && isChecked && <p>{content}</p>}
    </div>
  );
};

export default Tasks;
