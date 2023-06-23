import React from 'react';
import { INumberInput } from './types';

const NumberInput = (props: INumberInput) => {
  return (
    <>
      <div className='w-full lg:w-9/12 block mb-2 text-md text-gray-600'>
        {props.label}
      </div>
      <input
        className='w-full lg:w-9/12 border-gray-300 border-2 rounded py-2 px-3 text-gray-500 focus:border-blue-500 focus:outline-none mb-3'
        onChange={props.onChange}
        value={props.value}
        type='number'
        placeholder={props.placeholder}
        required={props.required}
      />
    </>
  );
};

export default NumberInput;
