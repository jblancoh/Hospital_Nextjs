import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className={styles.container}>This is the footer</footer>
    </div>
  )
}

export default Layout
