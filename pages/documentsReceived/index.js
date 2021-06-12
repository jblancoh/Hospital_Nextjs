import React, { useEffect, useState } from 'react';

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
    <div>
      <h1>Oficios recibidos</h1>
      {/* {services.map(civilization => {
        return <div>{civilization.name}</div>
      })} */}
    </div>
  );
}

export default DocumentsReceived;