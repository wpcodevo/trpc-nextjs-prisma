import React, { FC } from 'react';

type IMessageProps = {
  children: React.ReactNode;
};
const Message: FC<IMessageProps> = ({ children }) => {
  return (
    <div
      className='max-w-3xl mx-auto rounded-lg px-4 py-3 shadow-md bg-teal-100 flex items-center justify-center h-40'
      role='alert'
    >
      <span className='text-teal-500 text-xl font-semibold'>{children}</span>
    </div>
  );
};

export default Message;
