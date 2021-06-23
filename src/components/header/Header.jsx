import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.css';
import leftBracket from '../../../public/images/curly-brackets-left.png';
import rightBracket from '../../../public/images/curly-brackets-right.png';

export const Header = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' 
        ? (
          <div className={styles.headerContainer}>
            <section className={styles.headerLeft}>
              <div></div>
            </section>
            <section className={styles.headerRight}>
              <img 
                className={styles.brackets}
                src={leftBracket}
                alt="left curly bracket"
                height="25vh"
              />
              <Link to="/">Home</Link> &nbsp; | &nbsp;
              <Link to="/portfolio">Portfolio</Link>&nbsp;  | &nbsp;
              <Link to="/about">About</Link> &nbsp; | &nbsp;
              <Link to="/contact">Contact</Link> 
              <img 
                className={styles.brackets}
                src={rightBracket}
                alt="right curly bracket"
                height="25vh"
              />
            </section>
          </div>

        ) : (
          <div className={styles.headerContainer}>
            <section className={styles.headerLeft}>
              <div className={styles.name}>
                Jena Lux Boehm</div>
            </section>
            <section className={styles.headerRight}>
              <Link to="/">Home</Link> &nbsp; | &nbsp;
              <Link to="/portfolio">Portfolio</Link>&nbsp;  | &nbsp;
              <Link to="/about">About</Link> &nbsp; | &nbsp;
              <Link to="/contact">Contact</Link> 
            </section>
          </div>
        )}
    </>
  );
};
