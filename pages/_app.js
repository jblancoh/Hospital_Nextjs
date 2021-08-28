import React from 'react'
import Layout from '@components/Layout/Layout'
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#4caf50',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#f44336',
    },
  },
});
function Conofi({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  )
}

export default Conofi
