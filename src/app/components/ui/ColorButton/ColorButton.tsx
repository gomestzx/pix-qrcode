import { useData } from '@/app/hooks/useData';
import React from 'react';
import { IColorButtonProps } from './types';



const ColorButton = (props: IColorButtonProps) => {
  const { colorQrCode, setColorQrCode } = useData();
  return (
    <div className='flex items-center gap-5'>
      <button
        type='button'
        value={props.value}
        name='colorInput'
        onClick={() => setColorQrCode(`#${props.value}`)}
        defaultChecked={props.defaultChecked}
        className={`p-3 w-8 h-2 rounded-md mr-5 checked:border-emerald-500 ${
            `#${props.value}` === colorQrCode ? ' border-blue-500 border-2' : 'border-gray-300 border-2'
        }`}
        style={{ backgroundColor: `#${props.value}` }}
      />
    </div>
  );
};

export default ColorButton;
