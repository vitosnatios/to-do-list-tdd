import React, { PropsWithChildren } from 'react';

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className='text-4xl font-bold mb-8 text-purple-800'>{children}</h1>
  );
};

export default Title;
