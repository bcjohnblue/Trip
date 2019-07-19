import React from 'react';
import styles from './ArticleType.module.sass';

import Article from '../../components/Article/Article';
import { Link, Element, scroller } from 'react-scroll';

interface IArticleProps {
  title: string;
  img: Array<{ src: string; style?: object }>;
  intro: { title: string; href: string };
}

interface IArticleTypeProps {
  id: string;
  name: string;
  articles: IArticleProps[];
}

const ArticleType = (props: IArticleTypeProps) => {
  const { id, name, articles } = props;

  const articleDOM = articles.map((item, index) => {
    const { title, img, intro } = item;

    return <Article title={title} img={img} intro={intro} key={index} />;
  });
  // const Scroll = require('react-scroll');

  // Scroll.Events.scrollEvent.register('end', (to: any, element: any) => {
  //   console.log('end', to, element);
  //   scroller.scrollTo(to, {
  //     smooth: true,
  //     isDynamic: true,
  //   });
  //   Scroll.Events.scrollEvent.remove('end');
  // });

  return (
    <div>
      <div id={id} className={styles.article_type}>
        <div className={styles.title}>[台南] {name}</div>
        {articleDOM}
      </div>
    </div>
  );
};

export default ArticleType;
