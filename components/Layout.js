//import Menu from '../components/Menu/Burger'
import Nav from './Nav'
import Meta from './Meta'
import Footer from '../components/Footer/Footer'

//Styles
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
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
