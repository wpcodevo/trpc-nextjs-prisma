import React from 'react';
import Spinner from './Spinner';

type LoadingButtonProps = {
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  children: React.ReactNode;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  textColor = 'text-white',
  btnColor = 'bg-ct-yellow-600',
  children,
  loading = false,
}) => {
  return (
    <button
      type='submit'
      className={`w-full py-3 font-semibold ${btnColor} rounded-lg outline-none border-none flex justify-center ${
        loading ? 'bg-[#ccc]' : ''
      }`}
    >
      {loading ? (
        <div className='flex items-center gap-3'>
          <Spinner />
          <span className='text-slate-500 inline-block'>Loading...</span>
        </div>
      ) : (
        <span className={`${textColor}`}>{children}</span>
      )}
    </button>
  );
};
