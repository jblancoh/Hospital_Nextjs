import React from 'react';
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </menu>
    </nav>
  );
}

export default Navbar;