import React, { useEffect, useState } from 'react';
import { getCsrfToken } from "next-auth/client"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FormLogin from '@components/FormLogin/FormLogin'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    },
  }
}


const Login = (csrfToken) => {
  const classes = useStyles()
  return (
    <Container maxWidth="xs" component="main"
      className={classes.container}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <FormLogin data={csrfToken} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;