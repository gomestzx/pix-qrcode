import React, { ChangeEvent, useState } from 'react';
import TextInput from '@/components/TextInput/TextInput';
import { useData } from '@/hooks/useData';
import { maskPhone, unmask, maskCPF, maskCNPJ } from '@/utils/inputMask';

interface DropdownWithInputProps {}

const DropdownWithInput: React.FC<DropdownWithInputProps> = () => {
  const [selectedOption, setSelectedOption] = useState('Telefone');

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  let componenteRenderizado: JSX.Element | null = null;

  const { setChave, chave } = useData();

  switch (selectedOption) {
    case 'Telefone':
      componenteRenderizado = (
        <TextInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setChave(unmask(e.target.value))
          }
          placeholder='Digite seu telefone'
          value={maskPhone(chave)}
          maxLength={15}
        />
      );
      break;
    case 'Email':
      componenteRenderizado = (
        <TextInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setChave(e.target.value)
          }
          placeholder='Digite seu email'
        />
      );
      break;
    case 'CPF':
      componenteRenderizado = (
        <TextInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setChave(unmask(e.target.value))
          }
          placeholder='Digite seu CPF'
          value={maskCPF(chave)}
          maxLength={14}
        />
      );
      break;
    case 'CNPJ':
      componenteRenderizado = (
        <TextInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setChave(unmask(e.target.value))
          }
          value={maskCNPJ(chave)}
          placeholder='Digite seu CNPJ'
          maxLength={18}
        />
      );
      break;
    case 'Outro':
      componenteRenderizado = (
        <TextInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setChave(e.target.value)
          }
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
      <div className='w-full block mb-2 text-md text-gray-600'>Chave PIX</div>
      <div className='w-full flex items-center justify-center'>
        <select
          className='w-24 mr-2 py-2 mb-3 text-md text-gray-600'
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
