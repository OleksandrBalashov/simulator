import React, { useState, useEffect } from 'react';
import { blocks } from '../blocks/blocks';
import Button from '../components/button/Button';
import ButtonNext from '../components/buttonNext';
import styles from './styles/Simulator.module.css';

const Simulator = () => {
  const [elements, setElements] = useState(blocks);
  const [isVisibleBtn, setisVisibleBtn] = useState(true);
  const [isAbleBtnNext, setIsAbleBtnNext] = useState(false);

  const showElement = () => {
    const newElements = elements.map(item => ({ ...item }));
    const idx = newElements.findIndex(({ visible }) => visible === false);

    newElements[idx].visible = true;
    const { name } = newElements[idx].component.type;

    if (name === 'Tasks' || name === 'Task4') setisVisibleBtn(false);

    if (name === 'IconDone') {
      setisVisibleBtn(false);
      setIsAbleBtnNext(true);
    }

    setElements(newElements);
  };

  const visibleElements = elements
    .filter(({ visible }) => visible)
    .map(({ props, component: { type }, id }, i, arr) => {
      const Component = type;

      if (
        (type.name === 'Tasks' && i === arr.length - 1) ||
        (type.name === 'Task4' && i === arr.length - 1)
      ) {
        return (
          <Component
            {...props}
            key={id}
            onSubmit={() => setisVisibleBtn(true)}
          />
        );
      }
      return <Component {...props} key={id} />;
    });

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h3 className="center-align">Симулятор</h3>
        {visibleElements}
      </div>
      {isVisibleBtn && <Button handleClick={showElement} />}
      {isAbleBtnNext && <ButtonNext dest={'/map'} />}
    </div>
  );
};

export default Simulator;
