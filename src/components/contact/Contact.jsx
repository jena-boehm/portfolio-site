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

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'portfolio-contact', name, email, role, company, message })
    })
      .then(() => setIsSent(true))
      .catch(() => alert('Please try again'));
  };

  const thankYouMessage = <div className={styles.thankYou}>Thanks for reaching out! We&apos;ll be in touch. <br/>In the meantime, let&apos;s connect on LinkedIn and GitHub!</div>;

  const contactForm = <>
    <section className={styles.rightTop}>
      Let&apos;s chat!
    </section>  
    <form className={styles.form} name="portfolio-contact" autoComplete="none" method="post" onSubmit={handleSubmit}>

      <input type="hidden" name="form-name" value="portfolio-contact" />

      <div className={styles.formInput}>
        <input
          required
          type="text"
          name="portfolio-name"
          autoComplete="none"
          onChange={e => setName(e.target.value)}/>
        <label htmlFor="contactName7890">Name</label>
      </div>
    
      <div className={styles.formInput}>
        <input
          required
          type="email"
          name="portfolio-email"
          autoComplete="none"
          onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="contactEmail7890">Email</label> 
      </div>
      
      <div className={styles.formInput}>
        <input
          required
          type="text"
          name="portfolio-role"
          autoComplete="none"
          onChange={e => setRole(e.target.value)}/>  
        <label htmlFor="contactRole7890">Role</label> 
      </div>

      <div className={styles.formInput}>
        <input
          required
          type="text"
          name="portfolio-company"
          autoComplete="none"
          onChange={e => setCompany(e.target.value)}/>
        <label htmlFor="contactCompany7890">Company</label> 
      </div>

      <div className={styles.formInput}>
        <input
          required
          type="text"
          name="portfolio-message"
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
