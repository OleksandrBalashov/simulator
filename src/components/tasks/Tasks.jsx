import React, { useState } from 'react';
import styles from './Tasks.module.css';

const Tasks = ({
  condition,
  options,
  checkbox,
  answers,
  content,
  onSubmit,
}) => {
  const [value, setValue] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = ({ currentTarget: { value, name } }) => {
    checkbox ? setValue(prev => [...prev, value]) : setValue([value]);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit();
    setIsVisible(true);
    setIsChecked(true);
  };

  return (
    <div className={styles.wrap}>
      <h5 className={styles.title}>Задание</h5>
      <p className={styles.text}>{condition.title}</p>
      <div className={styles.wrapTasks}>
        <b className={styles.titleTask}>{condition.task}</b>

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
            <button
              typ="submit"
              className={
                value.length === 0
                  ? 'btn disabled'
                  : value.length < 2 && checkbox
                  ? 'btn  disabled'
                  : 'btn'
              }
            >
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
            <p className={styles.correctAnswer}>
              {value[0] === 'Вы можете их знать' && !checkbox
                ? answers[0]
                : answers[1]}
            </p>
          )}
        </div>
      )}
      {checkbox && isChecked && <p>{content}</p>}
    </div>
  );
};

export default Tasks;
