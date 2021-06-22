/* eslint-disable max-len */
import React from 'react';
import styles from './About.css';
import headshot from '../../../public/images/headshot.jpg';

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.titleLeft}>
            ABOUT
      </h1>
      <section className={styles.aboutTop}>
        <div className={styles.crop}>
          <img
            className={styles.headshot} 
            src={headshot}
            alt="Jena headshot"
            height="50%"
            width="auto"/>
        </div>
        <div className={styles.description}>
          Multifaceted, intuitive, and detail-driven Full Stack Software Engineer.
        </div>
      </section>
      <section className={styles.aboutMain}>
        
      </section>
    </div>
  );
};
