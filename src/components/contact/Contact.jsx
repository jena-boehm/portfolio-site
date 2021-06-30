/* eslint-disable max-len */
import React, { useState } from 'react';
import styles from './Contact.css';
import { Socials } from '../socials/Socials';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${process.env.ZAPIER_URL}`, {
      method: 'POST',
      body: JSON.stringify({ name, email, role, company, message })
    })
      .then(() => setIsSent(true))
      .catch(() => alert('There was an error, please try again'));
  };

  const thankYouMessage = <div className={styles.thankYou}>Thanks for reaching out! We&apos;ll be in touch. <br/>In the meantime, let&apos;s connect on LinkedIn and GitHub!</div>;

  const contactForm = <>
    <section className={styles.rightTop}>
      Let&apos;s chat!
    </section>  
    <form className={styles.form} onSubmit={handleSubmit}>

      <div className={styles.formInput}>
        <input
          required
          type="name"
          name="name"
          onChange={e => setName(e.target.value)}/>
        <label htmlFor="name">Name</label>
      </div>
    
      <div className={styles.formInput}>
        <input
          required
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="email">Email</label> 
      </div>
      
      <div className={styles.formInput}>
        <input
          required
          type="role"
          name="role"
          onChange={e => setRole(e.target.value)}/>  
        <label htmlFor="role">Role</label> 
      </div>

      <div className={styles.formInput}>
        <input
          required
          type="company"
          name="company"
          onChange={e => setCompany(e.target.value)}/>
        <label htmlFor="company">Company</label> 
      </div>

      <div className={styles.formInput}>
        <input
          required
          type="message"
          name="message"
          onChange={e => setMessage(e.target.value)}/>
        <label htmlFor="message">Message</label> 
      </div>

      <button type="submit">Send</button>
    </form>
  </>;

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.titleLeft}>
            CONTACT
      </h1>
      <section className={styles.aboutRight}>
        <section className={styles.rightMain}>
          {isSent ? thankYouMessage : contactForm}
        </section>
        <section className={styles.socials}>
          <Socials />
        </section>
      </section>
    </div>
  );
};
