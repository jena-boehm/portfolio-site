/* eslint-disable max-len */
import React from 'react';
import styles from './PortfolioDetails.css';
import PropTypes from 'prop-types';

export const PortfolioItemDetails = ({ 
  close, 
  name, 
  image, 
  description, 
  myContributions, 
  deployed, 
  github, 
  technologies 
}) => {

  const handleDeployed = () => {
    window.open(deployed);
  };

  const handleGitHub = () => {
    window.open(github);
  };

  return (
    <section className={styles.projectDetails}>
      <svg 
        className={styles.close} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        height="1.5em"
        onClick={close}>
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M6 18L18 6M6 6l12 12" />
      </svg>

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
        {deployed &&
        <>
          <button 
            className={styles.link}
            onClick={handleDeployed}>Deployed</button>
          <span>&nbsp; | &nbsp;</span>
        </>
        }
        <button 
          className={styles.link}
          onClick={handleGitHub}>GitHub</button>
      </section>
    </section>
  );
};

PortfolioItemDetails.propTypes = {
  close: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  myContributions: PropTypes.string,
  deployed: PropTypes.string,
  github: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired
};
