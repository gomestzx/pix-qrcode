'use client'
import { useData } from '@/app/hooks/useData';
import React from 'react';
import { ITitle } from './types';

const Title = (props: ITitle) => {
  const { openTemplate } = useData()
  return (
    <>
      {!openTemplate && <div className='p-4 font-medium'>
        <h1 className='text-4xl lg:text-5xl text-teal-500 text-center mt-6 font-bold font-montserrat'>
         {props.title}
        </h1>
        <p className='text-center text-bold text-gray-600 font-montserrat'>
         {props.description}
        </p>
      </div>}

    </>
  );
};

export default Title;
