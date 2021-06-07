import React from 'react';
import styles from './MarkdownString.module.css';

const MarkdownString = ({ text, bolt }) => {
  console.log({ text });
  return (
    <div className={styles.wrap}>
      {bolt ? <b>{text}</b> : <div>{text}</div>}
    </div>
  );
};

export default MarkdownString;
