import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link className={styles.link} href='/'>Accueil</Link>
          </li>
          <li>
            <Link className={styles.link} href='/realisations'>Réalisations</Link>
          </li>
          <li>
            <Link className={styles.link} href='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.siteInfos}>
        <h3 className={styles.siteName}>JCVDEVPRO</h3>
      </div>
    </div>
    
  )
}

export default Nav