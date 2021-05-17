import React from 'react';

//Styles
import styles from '../../styles/Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.col}>
      <p>Mentions légales</p>
      <p>Conditions générales de ventes</p>
      <p>Blog</p>
      <p>Réseaux sociaux</p>
    </div>
    <div className={styles.col}>
      <p>Contact</p>
    </div>
  </footer>
);

export default Footer;
