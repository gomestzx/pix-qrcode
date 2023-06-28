import { useState } from 'react';
import { ReactNode } from 'react';
import { IAccordionProps } from './types';

const Accordion = (props: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-4 py-4 bg-gray-200 hover:bg-gray-300"
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
        <div className="p-4 bg-gray-100">
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