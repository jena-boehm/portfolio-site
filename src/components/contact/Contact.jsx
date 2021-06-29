/* eslint-disable max-len */
import React, { useState } from 'react';
import styles from './Contact.css';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('https://hooks.zapier.com/hooks/catch/10440959/b3d89aj/', {
      method: 'POST',
      body: JSON.stringify({ name, email, role, company, message })
    })
      .then(() => setIsSent(true));
  };

  const thankYouMessage = <div>Thanks for reaching out! We&apos;l be in touch. In the meantime, let&apos;s connect on LinkedIn and GitHub!</div>;

  const contactForm = <form 
    className={styles.form}
    onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input
      type="name"
      name="name"
      onChange={e => setName(e.target.value)}/>
    <label htmlFor="email">Email</label> 
    <input
      type="email"
      name="email"
      onChange={e => setEmail(e.target.value)}/>
    <label htmlFor="role">Role</label> 
    <input
      type="role"
      name="role"
      onChange={e => setRole(e.target.value)}/>  
    <label htmlFor="company">Company</label> 
    <input
      type="company"
      name="company"
      onChange={e => setCompany(e.target.value)}/>
    <label htmlFor="message">Message</label> 
    <input
      type="message"
      name="message"
      onChange={e => setMessage(e.target.value)}/>
    <button type="submit">Send</button>
  </form>;

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.titleLeft}>
            CONTACT
      </h1>
      <section className={styles.aboutRight}>
        <section className={styles.rightTop}>
          Let&apos;s chat!
        </section>  

        <section className={styles.rightMain}>
          {isSent ? thankYouMessage : contactForm}
        </section>
      </section>
    </div>
  );
};
