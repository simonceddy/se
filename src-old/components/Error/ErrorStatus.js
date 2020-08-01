import React from 'react';

function ErrorStatus({ children }) {
  return (
    <h2 className="font-mono text-indigo-700 text-5xl">
      {children}
    </h2>
  );
}

export default ErrorStatus;
