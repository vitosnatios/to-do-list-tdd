import React, { PropsWithChildren } from 'react';

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className='text-5xl font-extrabold mb-7 text-purple-950'>{children}</h1>
  );
};

export default Title;
