import React from 'react';
import styles from './Tainan.module.sass';
import Article from '../../components/Article/Article';
import { checkIn } from './articles';

const Tainan20190728: React.FC = () => {
  const checkInDOM = checkIn.map((item, index) => {
    const { title, img, intro } = item;
    return <Article title={title} img={img} intro={intro} key={index} />;
  });

  return (
    <div className={styles.tainan}>
      <div className={styles.type_title}>[台南] IG 打卡景點</div>
      {checkInDOM}
    </div>
  );
};

export default Tainan20190728;
