import React, { useState, useEffect } from 'react';
import styles from './Portfolio.css';
import { projects }  from '../../data/data.js';
import uuid from 'react-uuid';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 1100);

  const handleMobile = () => {
    setMobile(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener('resize', handleMobile);
    return () => window.removeEventListener('resize', handleMobile);
  });

  const portfolioList = projects.map(project => {
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
        {isMobile 
        && <div className={styles.titleTop}>PORTFOLIO</div>}
        <section className={styles.portfolioGrid}>
          {portfolioList}
        </section>
      </section>
    </div>
  );
};
