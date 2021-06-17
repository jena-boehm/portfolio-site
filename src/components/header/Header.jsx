import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link to="/">Home</Link> &nbsp; | &nbsp;
      <Link to="/portfolio">Portfolio</Link>&nbsp;  | &nbsp;
      <Link to="/about">About</Link> &nbsp; | &nbsp;
      <Link to="/contact">Contact</Link> 
    </div>
  );
};
