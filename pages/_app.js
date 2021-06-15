import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from '../components/Layout'
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/globals.css'
import theme from '../theme';

function App({ Component, pageProps }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
       <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
