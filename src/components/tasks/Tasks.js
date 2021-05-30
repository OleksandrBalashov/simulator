import React, { useState } from 'react';
import styles from './Tasks.module.css';

const Tasks = ({ onSubmit }) => {
  const [value, setValue] = useState(null);

  const handleChange = ({ currentTarget: { value, name } }) => {
    setValue({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('click');

    onSubmit(false);
  };

  return (
    <div>
      <h5 className={styles.title}>Задание</h5>
      <p className={styles.text}>
        Вспомни свой опыт пользования Facebook. Как думаешь, какую функцию
        внедрила социальная сеть, чтобы больше пользователей достигали
        Aha-момента — добавляли в друзья 10 человек как можно скорее?
      </p>
      <div className={styles.wrapTasks}>
        <b className={styles.titleTask}>Выберите один из вариантов</b>

        <div>
          <form onSubmit={handleSubmit}>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="value"
                  type="radio"
                  value="Вы можете их знать"
                  onChange={handleChange}
                />
                <span>Вы можете их знать</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="value"
                  type="radio"
                  value="У кого может быть день рождения"
                  onChange={handleChange}
                />
                <span>У кого может быть день рождения</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="value"
                  type="radio"
                  value="Stories"
                  onChange={handleChange}
                />
                <span>Stories</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="value"
                  type="radio"
                  value="Реакция емодзи на пост"
                  onChange={handleChange}
                />
                <span>Реакция емодзи на пост</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="value"
                  type="radio"
                  value="Life-трансляция"
                  onChange={handleChange}
                />
                <span>Life-трансляция</span>
              </label>
            </p>
            <button typ="submit" className="btn">
              Продолжить
            </button>
          </form>
        </div>
      </div>
      <p className={styles.disableText}>
        Дайте ответ на задание, чтобы продолжить
      </p>
    </div>
  );
};

export default Tasks;
