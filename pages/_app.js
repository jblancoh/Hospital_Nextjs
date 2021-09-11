import React from 'react'
import Layout from '@components/Layout/Layout'
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider as AuthProvider } from "next-auth/client"


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#4CAF50',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#F44336',
    },
  },
});
function Conofi({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <MuiThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiThemeProvider>
    </AuthProvider>
  )
}

export default Conofi
