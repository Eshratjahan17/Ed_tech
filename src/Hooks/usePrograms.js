import { useEffect, useState } from 'react';

const usePrograms = () => {
  const [programs,setPrograms] = useState([]);
useEffect(() => {
  fetch("https://edtech12.herokuapp.com/programs")
    .then((res) => res.json())
    .then((data) => {
      setPrograms(data);
      console.log(programs);
    });
}, []);
return [programs];
};

export default usePrograms;