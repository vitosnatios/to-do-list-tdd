import React, { FormHTMLAttributes, PropsWithChildren } from 'react';

const Form = ({
  children,
  ...props
}: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>) => {
  return (
    <form className='mt-2 flex items-center flex-wrap gap-4 ' {...props}>
      {children}
    </form>
  );
};

export default Form;
