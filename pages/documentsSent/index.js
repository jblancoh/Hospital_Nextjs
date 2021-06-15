import React, { useEffect, useState } from 'react';
import FormDocument from '@components/FormDocument/FormDocument'
import {
  Container,
  Grid,
  GridItem,
  Divider
} from "@chakra-ui/react"

const DocumentsSent = () => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem colSpan={4} pt="10">
        <h1>Oficios enviados</h1>
      </GridItem>
      <Divider orientation="horizontal" />
      <GridItem colSpan={4} >
        <FormDocument />
      </GridItem>
    </Grid>
  );
}

export default DocumentsSent;