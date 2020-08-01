import React from 'react';
import ErrorBox from './ErrorBox';

function Error404() {
  return (
    <ErrorBox title="Page not found!" status={404}>
      But here is a message!
    </ErrorBox>
  );
}

export default Error404;
