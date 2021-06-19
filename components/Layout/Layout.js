import React from 'react'
import { useRouter } from 'next/router'
import Sidebar from '@components/Sidebar/Sidebar'
import styles from "./layout.module.css";
import { Container, Flex } from '@chakra-ui/react'

const Layout = ({ children }) => {
  const router = useRouter()
  const { route } = router
  return (
    <Flex w="100%">
      {route !== '/login' &&
        <Sidebar />
      }
      <Container maxW="container.xl" w="container.lg" centerContent>
        {children}
      </Container>
    </Flex>
  )
}

export default Layout
