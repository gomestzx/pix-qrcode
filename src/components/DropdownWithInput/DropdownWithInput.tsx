import React, { ChangeEvent, useState } from 'react';
import TextInput from '@/components/TextInput/TextInput';
import { useData } from '@/hooks/useData';
import { maskPhone, unmask, maskCPF, maskCNPJ } from '@/utils/inputMask';

interface DropdownWithInputProps {}

const DropdownWithInput: React.FC<DropdownWithInputProps> = () => {
  const [selectedOption, setSelectedOption] = useState('Telefone');

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setChave('');
  };

  const { setChave, chave } = useData();

  const optionsMap: { [key: string]: JSX.Element } = {
    Telefone: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setChave(unmask(e.target.value))
        }
        placeholder='Digite seu telefone'
        value={maskPhone(chave)}
        maxLength={15}
      />
    ),
    Email: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setChave(e.target.value)
        }
        placeholder='Digite seu email'
        value={chave}
      />
    ),
    CPF: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setChave(unmask(e.target.value))
        }
        placeholder='Digite seu CPF'
        value={maskCPF(chave)}
        maxLength={14}
      />
    ),
    CNPJ: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setChave(unmask(e.target.value))
        }
        value={maskCNPJ(chave)}
        placeholder='Digite seu CNPJ'
        maxLength={18}
      />
    ),
    Outro: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setChave(e.target.value)
        }
        placeholder='Digite sua chave'
        value={chave}
      />
    ),
  };

  const componenteRenderizado = optionsMap[selectedOption] || null;

  return (
    <>
      <div className='w-full block mb-2 text-md text-gray-600'>Chave PIX</div>
      <div className='w-full flex items-center justify-center'>
        <select
          className='w-24 mr-2 py-2 mb-3 text-md text-gray-600 bg-white focus:outline-none focus:ring-0 cursor-pointer'
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {Object.keys(optionsMap).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {componenteRenderizado}
      </div>
    </>
  );
};

export default DropdownWithInput;
