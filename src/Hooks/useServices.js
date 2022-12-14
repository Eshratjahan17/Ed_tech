import { useEffect, useState } from 'react';

const useServices = () => {
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetch("https://edtech12.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(services);
      });

  },[])
  return [services];
};

export default useServices;