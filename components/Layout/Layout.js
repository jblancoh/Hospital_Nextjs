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
      <Flex
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Container maxW="container.md" centerContent>
          {children}
        </Container>
      </Flex>
    </Flex>
  )
}

export default Layout
