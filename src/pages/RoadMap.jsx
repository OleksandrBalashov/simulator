import React from 'react';
import List from '../components/list';
import OrderedList from '../components/orderedList';
import roadMap from '../images/road-map.jpeg';
import data from '../jsons/data-roadMap.json';
import styles from './styles/RoadMap.module.css';

const RoadMap = () => {
  const { title, list, desc, conclusion } = data;
  return (
    <div className="container">
      <div className={styles.wrapImg}>
        <img src={roadMap} alt="roadMap" />
      </div>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.list}>
        <OrderedList data={list} />
      </div>

      <div className={styles.list}>
        <h5>{desc.title}</h5>
        <OrderedList data={desc.list} />
      </div>

      <div className={styles.list}>
        <List data={conclusion} />
      </div>
    </div>
  );
};

export default RoadMap;
