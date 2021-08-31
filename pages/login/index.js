import React, { useEffect, useState } from 'react';
import FormLogin from '@components/FormLogin/FormLogin'
// import { Box, Flex, Stack, Heading } from '@chakra-ui/react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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

const Login = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="xs" component="main" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <FormLogin />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;