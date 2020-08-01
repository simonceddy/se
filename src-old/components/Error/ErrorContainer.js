import React from 'react';

function ErrorContainer({ children }) {
  return (
    <div className="flex flex-col justify-between items-center">
      {children}
    </div>
  );
}

export default ErrorContainer;
