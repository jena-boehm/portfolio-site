import React from 'react';
import styles from './Portfolio.css';
import data from '../../data/data.js';
import uuid from 'react-uuid';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio = () => {
  const portfolioList = data.map(project => {
    return (
      <div key={uuid()} className={styles.projectItem}>
        <PortfolioItem {...project} />
      </div>
    );
  });

  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.titleLeft}>
            PORTFOLIO
      </h1>
      <section className={styles.portfolioMain}>
        <section className={styles.portfolioGrid}>
          {portfolioList}
        </section>
      </section>
    </div>
  );
};
