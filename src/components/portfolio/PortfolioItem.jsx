import React from 'react';
import styles from './Portfolio.css';
import Popup from 'reactjs-popup';
import { PortfolioItemDetails } from './PortfolioItemDetails';

export const PortfolioItem = (project) => {
  return (
    <>
      <figcaption>
        <div className={styles.projectName}>{project.name}</div>
      </figcaption>

      <figure className={styles.projectFigure}>
        <Popup 
          modal
          closeOnDocumentClick={true}
          trigger={open => (
            <img
              open={open}
              className={styles.projectImage}
              src={project.image}
              alt={project.name} 
              height="200em"/>
          )}>
          {close => (
            <PortfolioItemDetails 
              {...project} 
              close={close}/>
          )}
        </Popup>
      </figure>
    </>
  );
};
