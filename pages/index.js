import React from 'react';
import { getSession } from 'next-auth/client'

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (session === null) {
    // redirect
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  return {
    redirect: {
      destination: '/documentsSent/',
      permanent: false
    }
  }
}

const Home = () => {
  return (
    <div>
      <h1>Inicio</h1>
    </div>
  );
}

export default Home;