import React from 'react';
import styles from './Tainan.module.sass';
import ArticleType from '../../components/ArticleType/ArticleType';
import articles from './articles';

const Tainan20190728: React.FC = () => {
  const articleDOM = articles.map((type, index) => {
    const { name, articles } = type;
    return <ArticleType name={name} articles={articles} key={index} />;
  });

  return <div className={styles.tainan}>{articleDOM}</div>;
};

export default Tainan20190728;
