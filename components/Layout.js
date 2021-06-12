//import Menu from '../components/Menu/Burger'
import Menu from '../components/Menu/Burger';
import Meta from './Meta'
import Footer from '../components/Footer/Footer'
import Profil from '../components/Profil/Profil'

//Styles
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Menu />
      <Profil />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
