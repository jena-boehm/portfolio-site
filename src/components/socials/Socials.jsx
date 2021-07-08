import React from 'react';
import styles from './Socials.css';
import linkedInBottom from '../../../public/icons/white-linkedin-icon.png';
import linkedInTop from '../../../public/icons/black-linkedin-icon.png';
import githubBottom from '../../../public/icons/white-github-icon.png';
import githubTop from '../../../public/icons/black-github-icon.png';
import mailBottom from '../../../public/icons/white-mail-icon.png';
import mailTop from '../../../public/icons/black-mail-icon.png';
import { resume, linkedin, github, email } from '../../data/data.js';

export const Socials = () => {

  const handleResume =  () => {
    window.open(resume);
  };
  
  return (
    <div className={styles.socialsContainer}>
      <div className={styles.icons}>
        <div className={styles.iconContainer}>
          <a href={linkedin} target="_blank" rel = "noopener noreferrer">
            <img 
              className={styles.iconBottom} 
              src={linkedInBottom} 
              alt="LinkedIn Icon" />
            <div className={styles.iconTop}>
              <img 
                className={styles.imgTop} 
                src={linkedInTop} 
                alt="LinkedIn Icon" />
            </div>
          </a>
        </div> 

        <div className={styles.iconContainer}>
          <a href={github} target="_blank" rel = "noopener noreferrer">
            <img 
              className={styles.iconBottom} 
              src={githubBottom} 
              alt="GitHub Icon" />
            <div className={styles.iconTop}>
              <img 
                className={styles.imgTop} 
                src={githubTop} 
                alt="GitHub Icon" />
            </div>
          </a>
        </div> 

        <div className={styles.iconContainer}>
          <a href={email} target="_blank" rel = "noopener noreferrer">
            <img 
              className={styles.iconBottom} 
              src={mailBottom} 
              alt="Email Icon" />
            <div className={styles.iconTop}>
              <img 
                className={styles.imgTop} 
                src={mailTop} 
                alt="Email Icon" />
            </div>
          </a>
        </div> 
      </div>
      <button onClick={handleResume}>Resume</button>
    </div>
  );
};
