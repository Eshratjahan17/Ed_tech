import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from './Service';

const Services = () => {
  const [services]=useServices();
  
  return (
    <div className="py-9 px-9">
      <div>
        <h1 className="text-center text-3xl font-bold">Our Services</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;