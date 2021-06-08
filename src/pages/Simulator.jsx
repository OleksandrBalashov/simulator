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
    btn.current = true;

    dispatch(isVisibleBtn(false));
  }, [isAbleBtn, dispatch]);

  // const [block27, setBlock27] = useState(false);
  // const [block28, setBlock28] = useState(false);
  // const [block29, setBlock29] = useState(false);
  // const [block30, setBlock30] = useState(false);
  // const [block31, setBlock31] = useState(false);
  // const [block32, setBlock32] = useState(false);

  // useEffect(() => {
  //   const addNewBlock = () => {
  //
  //     if (count === 27) {
  //       setBlock27(true);
  //     }
  //     if (count === 28) setBlock28(true);
  //     if (count === 29) setBlock29(true);
  //     if (count === 30) setBlock30(true);
  //     if (count === 31) {
  //       setBlock31(true);
  //     }
  //     if (count === 32) {
  //       setBlock32(true);
  //       setIsAble(true);
  //     }
  //   };

  //   addNewBlock();
  // }, [count]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h2 className="center-align">Simulator</h2>
        {visibleElements}
      </div>
      {btn.current && <Button handleClick={showElement} />}
      {/* {block27 && <UserMessages message={7} />}
      {block28 && <Messages message={9} />}
      {block29 && <UserMessages message={8} />}
      {block30 && (
        <p className={styles.block}>
          Рабочий день подошел к концу, самое время отдохнуть.
        </p>
      )}

      {block31 && <ResultSimulator />}
      {block32 && (
        <div className={styles.wrapIcon}>
          <i className="large material-icons">done</i>
        </div>
      )} */}
      {/* {!isAble || (!block9 && !block11 && !block32 && !block26 && !block25) ? (
        <Button handleClick={() => setCount(prev => prev + 1)} />
      ) : null} */}
    </div>
  );
};

export default Simulator;
