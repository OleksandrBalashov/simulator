import React from 'react';
import styles from './MarkdownString.module.css';

const MarkdownString = ({ text, bold }) => {
  return (
    <div className={styles.wrap}>
      {bold ? <b>{text}</b> : <div>{text}</div>}
    </div>
  );
};

export default MarkdownString;
