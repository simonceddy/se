import React from 'react';
import ErrorContainer from './ErrorContainer';
import ErrorHeading from './ErrorHeading';
import ErrorStatus from './ErrorStatus';
import ErrorMessage from './ErrorMessage';

function ErrorBox({
  children,
  title,
  status
}) {
  return (
    <ErrorContainer>
      {status ? <ErrorStatus>{status}</ErrorStatus> : null}
      {title ? <ErrorHeading>{title}</ErrorHeading> : null}
      <ErrorMessage>
        {children}
      </ErrorMessage>
    </ErrorContainer>
  );
}

export default ErrorBox;
