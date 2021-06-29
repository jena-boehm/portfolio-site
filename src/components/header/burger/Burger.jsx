/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Burger.css';

export const Burger = ({ open, isOpen }) => {

  const handleBurger = () => {
    if(open === false) isOpen(true);
    else isOpen(false);
  };

  return (
    <div className={open ? styles.burgerOpen : styles.burgerClosed }
      onClick={handleBurger} >
      <div className={styles.bar1} key="b1" />
      <div className={styles.bar2} key="b2" />
      <div className={styles.bar3} key="b3" />
    </div>  
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  isOpen: PropTypes.func.isRequired
};
