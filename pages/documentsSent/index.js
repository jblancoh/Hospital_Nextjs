import React, { useEffect, useState } from 'react';
import FormDocument from '@components/FormDocument/FormDocument'
import {
  Divider,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Tabs,
  Tab,
  TabList,
} from "@chakra-ui/react"

const DocumentsSent = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <Flex
      flexDir="column"
      w="100%"
    >
      <Flex mt={35}>
        <Heading>Oficios enviados</Heading>
      </Flex>
      <Flex mt={35}>
        <Tabs isFitted variant="enclosed" onChange={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>
              Tabla
            </Tab>
            <Tab>
              Crear oficio
            </Tab>
            <Tab>
              Ver todos los oficios
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
      <Flex>
        <Divider orientation="horizontal" />
      </Flex>
      <Flex>
        {tabIndex === 0 ?
          <Table variant="simple" size="lg">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
          : tabIndex === 1 ?
            <FormDocument />
            : null
        }
      </Flex>
    </Flex>
  );
}

export default DocumentsSent;