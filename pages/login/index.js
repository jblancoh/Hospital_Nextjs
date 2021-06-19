import React, { useEffect, useState } from 'react';
import FormLogin from '@components/FormLogin/FormLogin'
import { Box, Flex, Stack, Heading } from '@chakra-ui/react'

const Login = () => {

  return (
    <Flex
      flexDir="column"
      w="100wh"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Iniciar sesión</Heading>
        <FormLogin />
      </Stack>
    </Flex>
  );
}

export default Login;