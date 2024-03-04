import React, { HTMLAttributes, PropsWithChildren } from 'react';

const AppContainer = ({
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <main className='flex flex-col items-center py-24 px-4 min-h-screen bg-gradient-to-b from-green-400 to-violet-800'>
      {children}
    </main>
  );
};

export default AppContainer;
