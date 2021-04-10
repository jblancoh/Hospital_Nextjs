import React from 'react';
import { useRouter } from "next/router";

const ServiceItem = () => {
  const { query: { serviceId } } = useRouter()

  return (
    <div>
      Esta es la pagina del servicio: {serviceId}
    </div>
  );
}

export default ServiceItem;