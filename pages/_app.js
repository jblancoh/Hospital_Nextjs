import React from 'react'
import Layout from '@components/Layout/Layout'
import { ChakraProvider } from "@chakra-ui/react"

function Conofi({ Component, pageProps }) {
  return <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
}

export default Conofi
