/* eslint-disable max-len */
import React from 'react';
import styles from './About.css';
import headshot from '../../../public/images/headshot.jpg';

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.titleLeft}>
            ABOUT
      </h1>
      <section className={styles.aboutRight}>
        <section className={styles.rightTop}>
          <div className={styles.crop}>
            <img
              className={styles.headshot} 
              src={headshot}
              alt="Jena headshot"
              height="50%"
              width="auto"/>
          </div>
          <div className={styles.description}>
          Multifaceted, intuitive, and detail-driven Full Stack Software Engineer.
          </div>
        </section>
        <section className={styles.rightMain}>
          <div className={styles.bio}>
          My work is inspired by open communication, authentic expression, and effective organization. Experienced with Full Stack, but front end really feels like home.<br/><br/>
          With a knack for creative problem-solving and an eye for front end design, I thrive in user-focused environments that fuse technology and art together in innovative ways.<br/><br/>
          Tech is the future, and I believe that as a software engineer I am able to directly and positively impact the lives of many people.
          </div>

          <div className={styles.line}></div>

          <div className={styles.techStack}>
            <div className={styles.techStackTitle}>
              Tech Stack<br/><br/>
            </div>
          - Languages: HTML, CSS, JavaScript<br/><br/>
          - Libraries & Frameworks: React, Redux, NodeJS, Twilio, ExpressJS, GraphQL, Superagent<br/><br/>
          - Testing: Jest, QUnit, Supertest, Travis CI, GitHub CI<br/><br/>
          - Databases: PostgreSQL<br/><br/>
          - Tools: VSCode, Git, GitHub, Heroku, Netlify, Postman, PGAdmin, Twilio, AWS Rekognition, Ableton Live<br/><br/>
          - Project Management Tools: Miro, Figma, Trello, Airtable, Asana, Slack<br/><br/>
          - Dev Practices: Pair Programming, RESTful APIs, Agile, Test Driven Development
          </div>
        </section>
        <section className={styles.bottomBlurb}>
          Other passions and skills:<br/>
          Electronic music production, audio engineering, DJing & live performing, concert & festival production, transcribing, volunteer coordination, dance, and classical piano.
        </section>
      </section>
    </div>
  );
};
