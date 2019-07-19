import React from 'react';
import styles from './Header.module.sass';
import articles from '../../pages/20190728/articles';

import { Link, scroller } from 'react-scroll';

const Header: React.FC = () => {
  const Scroll = require('react-scroll');

  const onClick = () => {
    Scroll.Events.scrollEvent.register('end', (to: any, element: any) => {
      console.log('end', to, element);

      scroller.scrollTo(to, {
        smooth: true,
        isDynamic: true,
      });
      Scroll.Events.scrollEvent.remove('end');

      const timer = setInterval(() => {
        console.log('timer');

        scroller.scrollTo(to, {
          smooth: true,
          isDynamic: true,
        });

        const remove = () => {
          console.log('remove');

          setTimeout(() => {
            clearInterval(timer);
            Scroll.Events.scrollEvent.remove('end');
          }, 0);
        };

        const options = {
          // root: document.querySelector('.App'),
          // rootMargin: '0px',
          threshold: 1.0,
        };

        const observer = new IntersectionObserver(remove, options);
        observer.observe(element);
      }, 1000);
    });
  };

  const linkDOM = articles.map(item => {
    return (
      <Link
        to={item.id}
        isDynamic={true}
        smooth={true}
        className={styles.link}
        key={item.id}
      >
        <span onClick={onClick}>{item.name}</span>
      </Link>
    );
  });

  return <div className={styles.header}>{linkDOM}</div>;
};

export default Header;
