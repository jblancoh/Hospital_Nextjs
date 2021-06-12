import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import styles from "./layout.module.css";
import { Container } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container maxW="container.md" centerContent>
        {children}
      </Container>
      <footer className={styles.container}>This is the footer</footer>
    </div>
  )
}

export default Layout
