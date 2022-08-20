import React from 'react';

const Program = ({ program }) => {
  const { name, picture } = program;
  return (
    <div>
      <div class="card w-96  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={picture} alt={name} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          
        </div>
      </div>
    </div>
  );
};

export default Program;