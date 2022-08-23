import React from 'react';
import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type TextInputProps = {
  label: string;
  name: string;
  type?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = 'text',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='mb-2'>
      <label className='block text-gray-700 text-lg mb-2' htmlFor='title'>
        {label}
      </label>
      <input
        className={twMerge(
          `appearance-none border border-ct-dark-200 rounded w-full py-3 px-3 text-gray-700 mb-2 leading-tight focus:outline-none`,
          `${errors[name] && 'border-red-500'}`
        )}
        type={type}
        {...register(name)}
      />
      <p
        className={twMerge(
          `text-red-500 text-xs italic mb-2 invisible`,
          `${errors[name] && 'visible'}`
        )}
      >
        {errors[name]?.message as string}
      </p>
    </div>
  );
};

export default TextInput;
