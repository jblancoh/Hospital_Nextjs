import React, { useEffect, useState } from 'react';
import FormLogin from '@components/FormLogin/FormLogin'
// import { Box, Flex, Stack, Heading } from '@chakra-ui/react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Login = () => {

  return (
    <Box component="span" m={1}>
      <Typography component="h1" variant="h6" color="inherit" noWrap >Iniciar sesión</Typography>
    </Box>
    // <Flex
    //   flexDir="column"
    //   w="100wh"
    //   h="100vh"
    //   justifyContent="center"
    //   alignItems="center"
    // >
    //   <Stack
    //     flexDir="column"
    //     mb="2"
    //     justifyContent="center"
    //     alignItems="center"
    //   >
    //     <Heading>Iniciar sesión</Heading>
    //     <FormLogin />
    //   </Stack>
    // </Flex>
  );
}

export default Login;