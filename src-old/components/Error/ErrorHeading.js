import React from 'react';

function ErrorHeading({ children }) {
  return (
    <h3 className="text-red-500 font-mono text-4xl">
      {children}
    </h3>
  );
}

export default ErrorHeading;
