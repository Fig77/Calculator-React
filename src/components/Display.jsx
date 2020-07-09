import React from 'react';

const Display = prop => {
  const { result } = prop;

  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
};

export default Display;
