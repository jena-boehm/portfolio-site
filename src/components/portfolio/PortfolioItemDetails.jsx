/* eslint-disable max-len */
import React from 'react';
import styles from './PortfolioDetails.css';
import PropTypes from 'prop-types';

export const PortfolioItemDetails = ({ name, image, description, myContributions, deployed, github, technologies }) => {
  return (
    <section className={styles.projectDetails}>
      <h2 className={styles.name}>{name}</h2>
      <img 
        src={image} 
        alt={name} 
        height="300em"
        className={styles.image} />
      <div className={styles.technologies}>{technologies}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.contributions}>{myContributions}</div>
      <section className={styles.detailsFooter}>
        <a 
          href={deployed}
          className={styles.link}>Deployed</a>&nbsp; | &nbsp;
        <a 
          href={github}
          className={styles.link}>GitHub</a>
      </section>
    </section>
  );
};

PortfolioItemDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  myContributions: PropTypes.string.isRequired,
  deployed: PropTypes.string,
  github: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired
};
