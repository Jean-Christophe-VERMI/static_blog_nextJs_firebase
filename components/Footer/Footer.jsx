import Link from 'next/link'

//Styles
import styles from '../../styles/Footer.module.css'

const Footer = () => (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link href='/mentions-legales'>Mentions légales</Link>
        <Link href='/conditions-generales'>Conditions générales de ventes</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/'>Réseaux sociaux</Link>
      </nav>
      <p className={styles.copyright}>2021 - Tous droits réservés</p>
    </footer>
  );

export default Footer;
