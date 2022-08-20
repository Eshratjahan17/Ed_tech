import React from 'react';

const Service = ({ service }) => {
   const {name,picture,about}=service;
  return (
    <div>
      <div class="card w-96 h-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={picture} alt={name} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{about}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Service;