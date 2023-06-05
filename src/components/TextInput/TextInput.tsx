import React from 'react';

interface ITextInput {
  label?: string;
  onChange(e: any): void;
  value: string;
  placeholder?: string;
}

const TextInput = (props: ITextInput) => {
  return (
    <>
      <div className='w-full lg:w-9/12 block mb-2 text-md text-gray-600'>{props.label}</div>
      <input
        className="w-full lg:w-9/12 border-gray-300 border-2 rounded py-2 px-3 text-gray-500 focus:border-blue-500 focus:outline-none mb-3"
        type='text'
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default TextInput;
