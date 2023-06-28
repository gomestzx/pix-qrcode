import React from 'react';
import { ITextInput } from './types';

const TextInput = (props: ITextInput) => {
  return (
    <>
      <div className='w-full block mb-2 text-md text-gray-600'>
        {props.label}
      </div>
      <input
        className='w-full border-gray-300 border-2 rounded py-2 px-3 text-gray-500 focus:border-blue-500 focus:outline-none mb-3'
        type='text'
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
      />
    </>
  );
};

export default TextInput;
