import React from 'react';
import styles from './ArticleType.module.sass';

import Article from '../../components/Article/Article';

interface IArticleProps {
  title: string;
  img: Array<{ src: string; style?: object }>;
  intro: { title: string; href: string };
}

interface IArticleTypeProps {
  name: string;
  articles: IArticleProps[];
}

const ArticleType = (props: IArticleTypeProps) => {
  const { name, articles } = props;

  const articleDOM = articles.map((item, index) => {
    const { title, img, intro } = item;

    return <Article title={title} img={img} intro={intro} key={index} />;
  });

  return (
    <div id={name} className={styles.article_type}>
      <div className={styles.title}>[台南] {name}</div>
      {articleDOM}
    </div>
  );
};

export default ArticleType;
