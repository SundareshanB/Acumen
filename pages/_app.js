import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { wrapper } from "../redux/store"
import '../styles/globals.css'
import { useRouter } from 'next/router';
 
function MyApp(props) {
  
  const { Component, pageProps } = props;
  const router = useRouter()

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // React.useEffect(() => {
  //   if (window.performance) {
  //     console.info("window.performance work's fine on this browser")
  //   }
  //   if (performance.navigation.type == 1) {
  //     router.push('/')
  //   } else {
  //     console.info('This page is not reloaded')
  //   }
    
  // }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
export default wrapper.withRedux(MyApp);
