import React, { ChangeEvent, useState } from 'react';
import TextInput from '@/components/TextInput/TextInput';
import { useData } from '@/hooks/useData';

interface DropdownWithInputProps {}

const DropdownWithInput: React.FC<DropdownWithInputProps> = () => {
  const [selectedOption, setSelectedOption] = useState('Telefone');

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  let componenteRenderizado: JSX.Element | null = null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChave(e.target.value);
  };

  const { setChave } = useData();

  switch (selectedOption) {
    case 'Telefone':
      componenteRenderizado = (
        <TextInput
          onChange={handleChange}
          placeholder='Digite seu telefone'
        />
      );
      break;
    case 'Email':
      componenteRenderizado = (
        <TextInput
          onChange={handleChange}
          placeholder='Digite seu email'
        />
      );
      break;
    case 'CPF':
      componenteRenderizado = (
        <TextInput onChange={handleChange} placeholder='Digite seu CPF' />
      );
      break;
    case 'CNPJ':
      componenteRenderizado = (
        <TextInput onChange={handleChange} placeholder='Digite seu CNPJ' />
      );
      break;
    case 'Outro':
      componenteRenderizado = (
        <TextInput
          onChange={handleChange}
          placeholder='Digite sua chave'
        />
      );
      break;
    default:
      componenteRenderizado = null;
      break;
  }

  return (
    <>
      <div className='w-full block mb-2 text-md text-gray-600'>
        Chave PIX
      </div>
      <div className='w-full flex items-center justify-center'>
        <select
          className='w-24 mr-2 py-2 mb-3'
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value='Telefone'>Telefone</option>
          <option value='Email'>Email</option>
          <option value='CPF'>CPF</option>
          <option value='CNPJ'>CNPJ</option>
          <option value='Outro'>Outro</option>
        </select>

        {componenteRenderizado}
      </div>
    </>
  );
};

export default DropdownWithInput;
