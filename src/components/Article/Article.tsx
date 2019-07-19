import React from 'react';
import styles from './Article.module.sass';

import LazyLoad from 'react-lazyload';

interface IArticleProps {
  title: string;
  img: Array<{ src: string; style?: object }>;
  intro: { title: string; href: string };
}

const Article = (props: IArticleProps) => {
  const { title, img, intro } = props;
  const imgDOM = img.map((item, index) => {
    return (
      <LazyLoad key={index} offset={300}>
        <img src={item.src} className={styles.img} style={item.style} alt="" />
      </LazyLoad>
    );
  });

  return (
    <div className={styles.article}>
      <div className={styles.article_title}>{title}</div>
      {imgDOM}
      <div className={styles.intro}>
        <span className={styles.intro_title}>圖文介紹:</span>
        <a href={intro.href} target="_blank" rel="noopener noreferrer">
          {intro.title}
        </a>
      </div>
    </div>
  );
};

export default Article;
