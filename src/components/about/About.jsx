/* eslint-disable max-len */
import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './About.css';
// import headshot from '../../../public/images/headshot.jpg';
import { Socials } from '../socials/Socials';
import { ScrollTwo } from '../scroll/ScrollTwo';

export const About = () => {
  const location = useLocation();
  const ref = useRef(null);
  const [isMobile, setMobile] = useState(window.innerWidth < 1100);

  const handleScroll = () => {
    ref.current.scrollIntoView();
  };

  const handleMobile = () => {
    setMobile(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener('resize', handleMobile);
    return () => window.removeEventListener('resize', handleMobile);
  });

  return (
    <div className={styles.aboutContainer}>
      <h1
        className={styles.titleLeft}
        style={
          location.pathname === '/'
            ? { display: 'none' }
            : isMobile
            ? { display: 'none' }
            : { display: 'flex' }
        }
      >
        ABOUT
      </h1>

      <section
        className={styles.aboutRight}
        style={
          location.pathname === '/about' && isMobile
            ? { margin: '2em' }
            : location.pathname === '/'
            ? { margin: '2em' }
            : { margin: '2em 2em 2em 13em' }
        }
      >
        <section className={styles.aboutRightSection}>
          <section className={styles.rightTop}>
            {location.pathname === '/about' && isMobile && (
              <div className={styles.titleTop}>ABOUT</div>
            )}
            <div className={styles.crop}>
              {/* <img
                className={styles.headshot} 
                src={headshot}
                alt="Jena headshot"
                height="50%"
                width="auto"/> */}
            </div>

            <div className={styles.description}>
              Multifaceted, intuitive, and detail-driven Front End Software
              Engineer.
            </div>

            <section className={styles.socials}>
              <Socials />
            </section>

            <section className={styles.scroll}>
              <div onClick={handleScroll}>
                <ScrollTwo />
              </div>
            </section>
          </section>

          <section className={styles.rightMain} ref={ref}>
            <div className={styles.bio}>
              My work is inspired by open communication, authentic expression,
              and effective organization. Experienced with Full Stack, but front
              end really feels like home.
              <br />
              <br />
              With a knack for creative problem-solving and an eye for front end
              design, I thrive in user-focused environments that fuse technology
              and art together in innovative ways.
              <br />
              <br />
              Tech is the future, and I believe that as a software engineer I am
              able to directly and positively impact the lives of many people.
            </div>

            <div className={styles.line}></div>

            <div className={styles.techStack}>
              {/* <div className={styles.techStackTitle}>
              Tech Stack<br/><br/>
              </div> */}
              <div className={styles.techStackLeft}>
                <div className={styles.stackItem}>
                  <div className={styles.stackHeader}>Languages:</div>
                  <div>HTML, CSS, JavaScript ES6</div>
                </div>

                <div className={styles.stackItem}>
                  <div className={styles.stackHeader}>
                    Libraries & Frameworks:
                  </div>
                  <div>React, Next.js, Gatsby, Node.js, GraphQL, Express</div>
                </div>

                <div className={styles.stackItem}>
                  <div className={styles.stackHeader}>Testing:</div>
                  <div>Jest, QUnit, Supertest, React Testing Library</div>
                </div>

                <div className={styles.stackItem}>
                  <div className={styles.stackHeader}>Databases:</div>
                  <div>PostgreSQL</div>
                </div>
              </div>

              <div className={styles.techStackRight}>
                <div className={styles.stackItem}>
                  <div className={styles.stackHeader}>Tools:</div>
                  <div>
                    VSCode, Git, GitHub, Heroku, Netlify, Postman, PGAdmin,
                    Ableton Live
                  </div>
                </div>

                <div className={styles.stackItem}>
                  <div className={styles.stackHeader}>
                    Project Management Tools:
                  </div>
                  <div>Miro, Figma, Trello, Airtable, Asana, Jira</div>
                </div>

                <div className={styles.stackItem}>
                  <div className={styles.stackHeader}>Dev Practices:</div>
                  <div>
                    Pair Programming, RESTful APIs, Agile, Test Driven
                    Development, Design Driven Development
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className={styles.bottomBlurb}>
          Other passions and skills:
          <br />
          Electronic music production, audio engineering, DJing & live
          performing, event production, transcribing, volunteer coordination,
          dance, and classical piano.
        </section>
      </section>
    </div>
  );
};
