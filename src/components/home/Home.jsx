import React, { useRef } from 'react';
import styles from './Home.css';
import { About } from '../about/About.jsx';
import { Scroll } from '../scroll/Scroll';

export const Home = () => {
  const ref = useRef(null);

  const handleScroll = () => {
    ref.current.scrollIntoView();
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <section className={styles.scroll}>
          <div onClick={handleScroll}>
            <Scroll />
          </div>
        </section>
      </div>
      <div className={styles.homeAbout}>
        <div className={styles.scrollLocation} ref={ref}></div>
        <About />
      </div>
    </>
  );
};
