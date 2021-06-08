import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/button/Button';
import styles from './styles/Simulator.module.css';
import { blocks } from '../blocks/blocks';
import { isVisibleBtn } from '../redux/simulator/simulatorReducer';

const Simulator = () => {
  const [elements, setElements] = useState(blocks);
  const isAbleBtn = useSelector(state => state.isVisibleBtn);
  const dispatch = useDispatch();

  const btn = useRef(true);

  const showElement = () => {
    const newElements = elements.map(item => ({ ...item }));
    const idx = newElements.findIndex(({ visible }) => visible === false);
    newElements[idx].visible = true;
    setElements(newElements);
  };

  const visibleElements = elements
    .filter(({ visible }) => visible)
    .map(({ props, component: { type }, id }, i, arr) => {
      const Component = type;
      if (type.name === 'IconDone') {
        btn.current = false;
      }
      if (type.name === 'Tasks' && i === arr.length - 1) {
        // btn.current = false;
      }
      return <Component {...props} key={id} />;
    });

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  useEffect(() => {
    // btn.current = true;

    dispatch(isVisibleBtn(false));
  }, [isAbleBtn, dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h2 className="center-align">Simulator</h2>
        {visibleElements}
      </div>
      {btn.current && <Button handleClick={showElement} />}
    </div>
  );
};

export default Simulator;
