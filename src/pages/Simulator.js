import React, { useState, useRef, useEffect } from 'react';
import Button from '../components/button/Button';
import AlexMessages from '../components/messages/alex/AlexMessages';
import UserMessages from '../components/messages/user/UserMessages';
import styles from './styles/Simulator.module.css';

const Simulator = () => {
  const [count, setCount] = useState(0);
  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [block3, setBlock3] = useState(false);
  const [block4, setBlock4] = useState(false);
  const [block5, setBlock5] = useState(false);
  const [block6, setBlock6] = useState(false);

  // const countRef = useRef(0);

  useEffect(() => {
    const handleClick = () => {
      // countRef.current += 1;
      // let { current: count } = countRef;

      if (count === 1) setBlock1(true);
      if (count === 2) setBlock2(true);
      if (count === 3) setBlock3(true);
      if (count === 4) setBlock4(true);
      if (count === 5) setBlock5(true);
      if (count === 6) setBlock6(true);
    };

    handleClick();
  }, [count]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h2 className="center-align">Simulator</h2>

        <div className={styles.block}>
          <p>
            Вы станете продакт-менеджером в стартапе Fungram, который недавно
            запустил приложение со смешными короткими видео. Видео длятся не
            больше 30 секунд и удаляются через 24 часа — смесь TikTok и Stories
            в Instagram. От вас требуется найти Aha-момент продукта, чтобы
            увеличить удержание пользователей.
          </p>
          <p>
            Сначала мы разберемся, что с Aha moment на нескольких зарубежных
            кейсах, а потом применим новую теорию на нашем продукте. В главе
            будет 4 задания для закрепления нового навыка.
          </p>
          <p>
            Это небольшой фрагмент реальной главы, поэтому прохождение займет не
            больше 10 минут. Общаемся на “ты”
          </p>
        </div>

        <h5 className={styles.title}>
          Переход от активации к retention: Aha moment
        </h5>
      </div>

      {block1 && (
        <b>Твой рабочий день начинается с сообщения Алекса, CEO Fungram.</b>
      )}

      {block2 && <AlexMessages count={0} />}
      {block3 && <AlexMessages count={1} />}
      {block4 && <UserMessages count={0} />}
      {block5 && <AlexMessages count={2} />}
      {block6 && <UserMessages count={1} />}
      <Button handleClick={() => setCount(prev => prev + 1)} />
    </div>
  );
};

export default Simulator;
