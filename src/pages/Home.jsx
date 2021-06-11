import React from 'react';
import ButtonNext from '../components/buttonNext';

import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrap}>
      <h1>Очень крутой слайдер</h1>
      <ButtonNext dest={'/auth'} />
    </div>
  );
};

export default Home;
