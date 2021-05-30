import React, { useState, useEffect } from 'react';
import Button from '../components/button/Button';
import AlexMessages from '../components/chat/alex/AlexMessages';
import UserMessages from '../components/chat/user/UserMessages';
import Tasks from '../components/tasks/Tasks';
import styles from './styles/Simulator.module.css';

const Simulator = () => {
  const [count, setCount] = useState(0);
  const [isAble, setIsAble] = useState(true);
  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [block3, setBlock3] = useState(false);
  const [block4, setBlock4] = useState(false);
  const [block5, setBlock5] = useState(false);
  const [block6, setBlock6] = useState(false);
  const [block7, setBlock7] = useState(false);
  const [block8, setBlock8] = useState(false);
  const [block9, setBlock9] = useState(false);

  useEffect(() => {
    const addNewBlock = () => {
      if (count === 1) setBlock1(true);
      if (count === 2) setBlock2(true);
      if (count === 3) setBlock3(true);
      if (count === 4) setBlock4(true);
      if (count === 5) setBlock5(true);
      if (count === 6) setBlock6(true);
      if (count === 7) setBlock7(true);
      if (count === 8) setBlock8(true);
      if (count === 9) setBlock9(true);
    };

    addNewBlock();
  }, [count]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  const handleSubmit = value => {
    setIsAble(value);
  };

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
        <b className={styles.boltText}>
          Твой рабочий день начинается с сообщения Алекса, CEO Fungram.
        </b>
      )}
      <div className={styles.containerChat}>
        {block2 && <AlexMessages count={0} />}
        {block3 && <AlexMessages count={1} />}
        {block4 && <UserMessages count={0} />}
        {block5 && <AlexMessages count={2} />}
        {block6 && <UserMessages count={1} />}
      </div>
      {block7 && (
        <p>
          Твоя задача — улучшить Retention февральской когорты. В этом поможет
          Aha-moment.
        </p>
      )}
      {block8 && (
        <div className={styles.block}>
          <p>
            Но сначала надо разобраться с воронкой продукта. Ее базовая идея
            такая — мы привлекаем 1000 пользователей, 300 начинают пользоваться
            сервисом, 100 системно возвращаются, 50 приносят стабильный доход.
          </p>
          <p>
            Чтобы пользователи возвращались в продукт, им нужно испытать Aha
            moment. Те 200 пользователей, которые не испытали его, уходят из
            приложения.
          </p>
          <p>
            Aha-момент — это “момент озарения”, когда человек осознает ценность
            продукта и принимает решение остаться его постоянным пользователем.
            Чем больше людей проходят этот этап, тем выше Retention продукта
            (возвращаемость).
          </p>
          <p>
            Например, Facebook определил свой Aha-момент так: наличие 10 друзей
            спустя 7 дней после регистрации. Оказалось, что это очень сильно
            влияет на желание пользователя и дальше пользоваться социальной
            сетью. Те, кто добавил меньше друзей, с большей вероятностью
            забрасывали сайт.
          </p>
        </div>
      )}
      {block9 && <Tasks onSubmit={handleSubmit} />}
      {!block9 && isAble ? null : (
        <Button handleClick={() => setCount(prev => prev + 1)} />
      )}
    </div>
  );
};

export default Simulator;
