import React from 'react';

interface ErrorProps {
  errorMessage?: any;
}

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  return <div>Error: {errorMessage}</div>;
};

export default Error;
