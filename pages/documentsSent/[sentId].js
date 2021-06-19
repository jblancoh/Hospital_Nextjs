import React from 'react';
import { useRouter } from "next/router";

const ServiceItem = () => {
  const { query: { sentId } } = useRouter()

  return (
    <div>
      Esta es la pagina del oficio enviado: {sentId}
    </div>
  );
}

export default ServiceItem;