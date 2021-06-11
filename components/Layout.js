//import Menu from '../components/Menu/Burger'
import Menu from '../components/Menu/Burger';
import Meta from './Meta'
import Footer from '../components/Footer/Footer'

//Styles
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Menu />
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
