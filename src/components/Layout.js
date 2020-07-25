import React from 'react';

function Layout({ children }) {
  return (
    <div className="mx-auto min-h-full w-full sm:w-5/6 md:w-3/4 lg:w-2/3">
      {children}
    </div>
  );
}

export default Layout;
