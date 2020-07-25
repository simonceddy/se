import React from 'react';

function HeadingContainer({ children }) {
  return (
    <h1 className="md:text-2xl text-xl">
      {children}
    </h1>
  );
}

export default HeadingContainer;
