/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styles from './Contact.css';
import { Socials } from '../socials/Socials';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth < 1100);

  const handleMobile = () => {
    setMobile(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener('resize', handleMobile);
    return () => window.removeEventListener('resize', handleMobile);
  });

  const handleSubmit = e => {
    e.preventDefault();
    // fetch(`${process.env.ZAPIER_URL}`, {
    //   method: 'POST',
    //   body: JSON.stringify({ name, email, role, company, message })
    // })
    setIsSent(true)
      .catch(() => alert('There was an error, please try again'));
  };

  const thankYouMessage = <div className={styles.thankYou}>Thanks for reaching out! We&apos;ll be in touch. <br/>In the meantime, let&apos;s connect on LinkedIn and GitHub!</div>;

  const contactForm = <>
    <section className={styles.rightTop}>
      Let&apos;s chat!
    </section>  
    <form className={styles.form} name="portfolio-contact" autoComplete="none" data-netlify="true" onSubmit={handleSubmit}>

      <div className={styles.formInput}>
        <input
          required
          type="portfolioName7890"
          name="portfolioName"
          autoComplete="none"
          onChange={e => setName(e.target.value)}/>
        <label htmlFor="contactName7890">Name</label>
      </div>
    
      <div className={styles.formInput}>
        <input
          required
          type="portfolioEmail7890"
          name="portfolioEmail7890"
          autoComplete="none"
          onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="contactEmail7890">Email</label> 
      </div>
      
      <div className={styles.formInput}>
        <input
          required
          type="portfolioRole7890"
          name="portfolioRole7890"
          autoComplete="none"
          onChange={e => setRole(e.target.value)}/>  
        <label htmlFor="contactRole7890">Role</label> 
      </div>

      <div className={styles.formInput}>
        <input
          required
          type="portfolioCompany7890"
          name="portfolioCompany7890"
          autoComplete="none"
          onChange={e => setCompany(e.target.value)}/>
        <label htmlFor="contactCompany7890">Company</label> 
      </div>

      <div className={styles.formInput}>
        <input
          required
          type="portfolioMessage7890"
          name="portfolioMessage7890"
          autoComplete="on"
          onChange={e => setMessage(e.target.value)}/>
        <label htmlFor="contactMessage7890">Message</label> 
      </div>

      <button type="submit">Send</button>
    </form>
  </>;

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.titleLeft}>
            CONTACT
      </h1>
      <section className={styles.contactRight}>
        <section className={styles.rightMain}>
          {isMobile 
        && <div className={styles.titleTop}>CONTACT</div>}
          {isSent ? thankYouMessage : contactForm}
        </section>
        <section className={styles.socials}>
          <Socials />
        </section>
      </section>
    </div>
  );
};
