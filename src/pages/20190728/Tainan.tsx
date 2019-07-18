import React from 'react';
import styles from './Tainan.module.sass';
import ArticleType from '../../components/ArticleType/ArticleType';
import articles from './articles';

const Tainan20190728: React.FC = () => {
  const articleDOM = articles.map((type, index) => {
    const { name, articles } = type;
    return <ArticleType name={name} articles={articles} key={index} />;
  });
  // const checkInDOM = checkIn.map((item, index) => {
  //   const { title, img, intro } = item;
  //   return <Article title={title} img={img} intro={intro} key={index} />;
  // });
  // const dessertDOM = dessert.map((item, index) => {
  //   const { title, img, intro } = item;
  //   return <Article title={title} img={img} intro={intro} key={index} />;
  // });

  return (
    <div className={styles.tainan}>
      {articleDOM}
      {/* <ArticleType></ArticleType>
      <div className={styles.type_title}>[台南] IG 打卡景點</div>
      {checkInDOM}
      <div className={styles.type_title}>[台南] 甜點、下午茶</div>
      {dessertDOM} */}
    </div>
  );
};

export default Tainan20190728;
