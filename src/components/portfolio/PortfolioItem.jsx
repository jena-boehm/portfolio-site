import React from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.css';

export const PortfolioItem = ({ name, image }) => {
  return (
    <>
      <figcaption>
        <div className={styles.projectName}>{name}</div>
      </figcaption>
      
      <figure className={styles.projectFigure}>
        <img
          className={styles.projectImage}
          src={image}
          alt={name} 
          height="200em"/>
      </figure>
    </>
  );
};

PortfolioItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
