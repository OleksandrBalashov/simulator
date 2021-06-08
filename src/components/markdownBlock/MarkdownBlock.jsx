import React from 'react';
import styles from './MarkdownBlock.module.css';
import ListMarkdown from './ListMarkdown';

const MarkdownBlock = ({ content, contentList, conclusion }) => {
  return (
    <div className={styles.wrap}>
      <ListMarkdown content={content} />
      <p>{contentList.title}</p>
      <ol className={styles.list}>
        {contentList.list.map(({ title, desc }) => (
          <li key={title}>
            <h5>{title}</h5>
            <p>{desc}</p>
          </li>
        ))}
      </ol>
      <ListMarkdown content={conclusion} />
    </div>
  );
};

export default MarkdownBlock;
