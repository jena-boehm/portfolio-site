import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.css';

export const Header = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' 
        ? (
          <div className={styles.headerContainer}>
            <section className={styles.headerRight}>
              <Link to="/">Home</Link> &nbsp; | &nbsp;
              <Link to="/portfolio">Portfolio</Link>&nbsp;  | &nbsp;
              <Link to="/about">About</Link> &nbsp; | &nbsp;
              <Link to="/contact">Contact</Link> 
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
