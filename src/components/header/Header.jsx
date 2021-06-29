/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.css';
// import './Header.css';
import leftBracket from '../../../public/images/curly-brackets-left.png';
import rightBracket from '../../../public/images/curly-brackets-right.png';
import { Burger } from './burger/Burger';

export const Header = () => {
  const location = useLocation();
  const [open, isOpen] = useState(false);

  return (
    <>
      {location.pathname === '/' 
        ? (
          <div className={styles.headerContainer}>
            <section className={styles.headerLeft}>
              <div></div>
            </section>
            <section className={styles.headerRight}>
              <Burger open={open} isOpen={isOpen} />
              <section 
                className={open ? styles.navOpen : styles.navClosed}>
                <img 
                  className={styles.brackets}
                  src={leftBracket}
                  alt="left curly bracket"
                  height="25vh"
                />
                <section className={styles.links}>
                  <Link to="/">Home</Link> &nbsp; | &nbsp;
                  <Link to="/portfolio">Portfolio</Link>&nbsp;  | &nbsp;
                  <Link to="/about">About</Link> &nbsp; | &nbsp;
                  <Link to="/contact">Contact</Link> 
                </section>
                <img 
                  className={styles.brackets}
                  src={rightBracket}
                  alt="right curly bracket"
                  height="25vh"
                />
              </section>
            </section>
          </div>

        ) : (
          <div className={styles.headerContainer}>
            <section className={styles.headerLeft}>
              <div className={styles.name}>
                JENA LUX BOEHM</div>
            </section>
            <section className={styles.headerRight}>
              <Burger open={open} isOpen={isOpen} />
              <section 
                className={open ? styles.navOpen : styles.navClosed}>
                <img 
                  className={styles.brackets}
                  src={leftBracket}
                  alt="left curly bracket"
                  height="25vh"
                />
                <Link to="/"
                  onClick={() => isOpen(false)}>Home</Link> &nbsp; | &nbsp;
                <Link to="/portfolio"
                  onClick={() => isOpen(false)}>Portfolio</Link>&nbsp;  | &nbsp;
                <Link to="/about"
                  onClick={() => isOpen(false)}>About</Link> &nbsp; | &nbsp;
                <Link to="/contact"
                  onClick={() => isOpen(false)}>Contact</Link> 
                <img 
                  className={styles.brackets}
                  src={rightBracket}
                  alt="right curly bracket"
                  height="25vh"
                />
              </section>
            </section>
          </div>
        )}
    </>
  );
};
