import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import FormDocument from '@components/FormDocument/FormDocument'
import Dashboard from '@components/Dashboard/Dashboard'
import TableData from '@components/Table/Table'
import TabPanel from '@components/TabPanel/TabPanel'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { useSession, getSession } from 'next-auth/client'
import getDocumentsSent from '../api/documentsSent'

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

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  const documents = await getDocumentsSent(context)
  if (session === null) {
    // redirect
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  return {
    props: { session, documents }
  }
}

const DocumentsSent = ({ documents }) => {
  const classes = useStyles()
  const [tabIndex, setTabIndex] = useState(0)
  const theme = useTheme();
  const [session, loading] = useSession()
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleChangeIndex = (index) => {
    setTabIndex(index);
  };

  if (loading) {
    return null
  }
  if (session === null) {
    return <span>No has iniciado sesión</span>
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Typography component="h1" variant="h6" color="inherit" noWrap >Oficios Enviados</Typography>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Tabs
              value={tabIndex}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Agregar" />
              <Tab label="Tabla" />
            </Tabs>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={tabIndex}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={tabIndex} index={0} dir={theme.direction}>
                <FormDocument />
              </TabPanel>
              <TabPanel value={tabIndex} index={1} dir={theme.direction}>
                <TableData data={documents.results} />
              </TabPanel>
            </SwipeableViews>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DocumentsSent;