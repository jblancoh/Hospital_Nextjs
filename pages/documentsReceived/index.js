import React, { useEffect, useState } from 'react';
import FormDocument from '@components/FormDocument/FormDocument'
import {
  Divider,
  Flex,
  Heading,
  Container
} from "@chakra-ui/react"

const DocumentsReceived = () => {
  // const [services, setServices] = useState([])
  // useEffect(() => {
  //   fetch('/api/services')
  //     .then(response => response.json())
  //     .then(({ civilizations }) => {
  //       console.log('data', civilizations)
  //       setServices(civilizations)
  //     })
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [])
  return (
    <Flex
      flexDir="column"
      w="100%"
    >
      <Flex mt={35}>
        <Heading>Oficios recibidos</Heading>
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

export default DocumentsReceived;