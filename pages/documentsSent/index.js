import React, { useEffect, useState } from 'react';
import FormDocument from '@components/FormDocument/FormDocument'
import {
  Divider,
  Flex,
  Heading,
  Container
} from "@chakra-ui/react"

const DocumentsSent = () => {
  return (
    <Flex
      flexDir="column"
      w="100%"
    >
      <Flex mt={35}>
        <Heading>Oficios enviados</Heading>
      </Flex>
      <Flex>
        <Divider orientation="horizontal" />
      </Flex>
      <Flex>
        <FormDocument />
      </Flex>
    </Flex>
  );
}

export default DocumentsSent;