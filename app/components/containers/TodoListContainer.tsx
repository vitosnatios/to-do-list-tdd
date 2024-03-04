import React, { HTMLAttributes, PropsWithChildren } from 'react';

const TodoListContainer = ({
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return <div className='w-full max-w-lg mt-8'>{children}</div>;
};

export default TodoListContainer;
