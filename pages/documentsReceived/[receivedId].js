import React from 'react';
import { useRouter } from "next/router";

const ServiceItem = () => {
  const { query: { receivedId } } = useRouter()

  return (
    <div>
      Esta es la pagina de oficio recibido: {receivedId}
    </div>
  );
}

export default ServiceItem;