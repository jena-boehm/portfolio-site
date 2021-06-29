import React from 'react';
import styles from './Home.css';
import { About } from '../about/About.jsx';

export const Home = () => {

  return (
    <>
      <div className={styles.homeContainer}></div>
      <About />
    </>
  );
};
