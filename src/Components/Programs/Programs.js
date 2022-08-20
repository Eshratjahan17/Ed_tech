import React from 'react';
import usePrograms from '../../Hooks/usePrograms';
import Program from './Program';

const Programs = () => {
  const [programs]=usePrograms();
  return (
    <div className="py-9 px-9">
      <div>
        <h1 className="text-center text-3xl font-bold">Our programs</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4">
        {programs.map((program) => (
          <Program program={program}></Program>
        ))}
      </div>
    </div>
  );
};

export default Programs;