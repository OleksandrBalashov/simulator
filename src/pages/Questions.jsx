import React from 'react';
import testIcon from '../images/testIcon/image1.svg';
import icon from '../images/testIcon/image2.svg';
import close from '../images/Path.svg';
import styles from './styles/Test.module.css';

const arr = [
  {
    img: testIcon,
    descr: 'Разрабатывать компьютерные программы и алгоритмы',
  },
  {
    img: icon,
    descr: 'Вести занятия в фитнес зале',
  },
];

const Questions = () => {
  const newArr = arr.map(({ img, descr }) => {
    return (
      <li key={descr} className={styles.box}>
        <img src={img} alt="icon" /> <p>{descr}</p>
      </li>
    );
  });

  return (
    <div className={styles.boxTest}>
      <img className={styles.closeBtn} src={close} alt="Close Icon" />
      <div className={styles.progresSize}></div>
      <h1>1. Вы бы предпочли:</h1>
      <p>Выберите один из вариантов:</p>
      <ul className={styles.cards}>{newArr}</ul>
    </div>
  );
};

export default Questions;
