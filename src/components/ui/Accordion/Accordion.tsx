'use client'
import { useState } from 'react';
import { IAccordionProps } from './types';

const Accordion = (props: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(props.open);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full font-medium'>
      <button
        className="flex items-center justify-between w-full px-4 py-4 mt-2 border border-slate-300 rounded-md shadow-sm bg-white"
        onClick={toggleAccordion}
      >
        <span>{props.title}</span>
        <svg
          className={`w-4 h-4 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
        >
          <path fill="currentColor" d="M6 6L10 10L14 6H6Z" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4">
          {typeof props.content === 'string' ? (
            <p>{props.content}</p>
          ) : (
            props.content
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;