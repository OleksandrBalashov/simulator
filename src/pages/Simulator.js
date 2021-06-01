import React, { useState, useEffect } from 'react';
import AHaBlock from '../components/aHaBlock/AHaBlock';
import Button from '../components/button/Button';
import Messages from '../components/chat/messages/Messages';
import UserMessages from '../components/chat/user/UserMessages';
import Tasks from '../components/tasks/Tasks';
import Task4 from '../components/tasks/Task4';
import task1 from '../jsons/task1.json';
import task2 from '../jsons/task2.json';
import task3 from '../jsons/task3.json';
import task4 from '../jsons/task4.json';
import styles from './styles/Simulator.module.css';
import ResultSimulator from '../components/resultSimulator/ResultSimulator';

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
  const [block10, setBlock10] = useState(false);
  const [block11, setBlock11] = useState(false);
  const [block12, setBlock12] = useState(false);
  const [block13, setBlock13] = useState(false);
  const [block14, setBlock14] = useState(false);
  const [block15, setBlock15] = useState(false);
  const [block16, setBlock16] = useState(false);
  const [block17, setBlock17] = useState(false);
  const [block18, setBlock18] = useState(false);
  const [block19, setBlock19] = useState(false);
  const [block20, setBlock20] = useState(false);
  const [block21, setBlock21] = useState(false);
  const [block22, setBlock22] = useState(false);
  const [block23, setBlock23] = useState(false);
  const [block24, setBlock24] = useState(false);
  const [block25, setBlock25] = useState(false);
  const [block26, setBlock26] = useState(false);
  const [block27, setBlock27] = useState(false);
  const [block28, setBlock28] = useState(false);
  const [block29, setBlock29] = useState(false);
  const [block30, setBlock30] = useState(false);
  const [block31, setBlock31] = useState(false);

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
      if (count === 10) setBlock10(true);
      if (count === 11) {
        setBlock11(true);
        setIsAble(true);
      }
      if (count === 12) setBlock12(true);
      if (count === 13) setBlock13(true);
      if (count === 14) setBlock14(true);
      if (count === 15) setBlock15(true);
      if (count === 16) setBlock16(true);
      if (count === 17) setBlock17(true);
      if (count === 18) setBlock18(true);
      if (count === 19) setBlock19(true);
      if (count === 20) setBlock20(true);
      if (count === 21) setBlock21(true);
      if (count === 22) setBlock22(true);
      if (count === 23) setBlock23(true);
      if (count === 24) setBlock24(true);
      if (count === 25) {
        setIsAble(true);
        setBlock25(true);
      }
      if (count === 27) {
        setBlock27(true);
      }
      if (count === 28) setBlock28(true);
      if (count === 29) setBlock29(true);
      if (count === 30) setBlock30(true);
      if (count === 31) setBlock31(true);
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
    if (count === 25 && block26) {
      setIsAble(false);
      setCount(26);
      return;
    }

    if (count === 25) {
      return setBlock26(true);
    }

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
        {block2 && <Messages count={0} />}
        {block3 && <Messages count={1} />}
        {block4 && <UserMessages count={0} />}
        {block5 && <Messages count={2} />}
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
      {block9 && <Tasks data={task1} onSubmit={handleSubmit} />}
      {block10 && <AHaBlock />}
      {block11 && <Tasks data={task2} onSubmit={handleSubmit} />}
      {block12 && (
        <p className={styles.title}>
          Ты долго думаешь про Aha-момент Fungram и понимаешь, что можно
          спросить Лизу, продуктового аналитика. Она должна знать!
        </p>
      )}
      {block13 && <UserMessages count={2} />}
      {block14 && <Messages count={3} liza={true} />}
      {block15 && <UserMessages count={3} />}
      {block16 && <Messages count={4} liza={true} />}
      {block17 && <Messages count={5} liza={true} />}
      {block18 && <Messages count={6} liza={true} />}
      {block19 && <UserMessages count={4} />}
      {block20 && <Messages count={7} liza={true} />}
      {block21 && <UserMessages count={5} />}
      {block22 && <Messages count={8} liza={true} />}
      {block23 && <UserMessages count={6} />}

      {block24 && (
        <p>
          Теперь ты знаешь, в чем заключается Aha-момент Fungram. Самое время
          выдвинуть гипотезы, которые помогут пользователям испытать его.
        </p>
      )}
      {block25 && <Tasks data={task3} onSubmit={handleSubmit} />}
      {block26 && <Task4 data={task4} onSubmit={handleSubmit} />}
      {block27 && <UserMessages count={7} />}
      {block28 && <Messages count={9} />}
      {block29 && <UserMessages count={8} />}
      {block30 && (
        <p className={styles.block}>
          Рабочий день подошел к концу, самое время отдохнуть.
        </p>
      )}
      {block31 && <ResultSimulator />}
      {!isAble || (!block9 && !block11 && !block26 && !block25) ? (
        <Button handleClick={() => setCount(prev => prev + 1)} />
      ) : null}
    </div>
  );
};

export default Simulator;
