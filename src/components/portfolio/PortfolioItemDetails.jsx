/* eslint-disable max-len */
import React from 'react';
import styles from './PortfolioDetails.css';
import PropTypes from 'prop-types';

export const PortfolioItemDetails = ({ name, image, description, myContributions, deployed, github, technologies }) => {
  return (
    <section className={styles.projectDetails}>
      <section className={styles.detailsHeader}>
        <h2>{name}</h2>
        <a href={deployed}>Deployed</a>
        <a href={github}>GitHub</a>
      </section>
      <img 
        src={image} 
        alt={name} 
        height="200em"/>
      <div>{technologies}</div>
      <div>{description}</div>
      <div>{myContributions}</div>
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
