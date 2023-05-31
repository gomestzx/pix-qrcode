"use client"
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface IDataContext {
  chave: string;
  setChave: Dispatch<SetStateAction<string>>;
  cidade: string;
  setCidade: Dispatch<SetStateAction<string>>;
  recebedor: string;
  setRecebedor: Dispatch<SetStateAction<string>>;
  valor: string;
  setValor: Dispatch<SetStateAction<string>>;
  identificador: string;
  setIdentificador: Dispatch<SetStateAction<string>>;
  mensagem: string;
  setMensagem: Dispatch<SetStateAction<string>>;
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
}

interface IProviderProps {
  children: ReactNode;
}

export const DataContext = createContext({} as IDataContext);

export function DataProvider({ children }: IProviderProps) {
  const [chave, setChave] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [recebedor, setRecebedor] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [identificador, setIdentificador] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');
  const [cep, setCep] = useState<string>('');

  return (
    <DataContext.Provider
      value={{
        chave,
        setChave,
        cidade,
        setCidade,
        recebedor,
        setRecebedor,
        valor,
        setValor,
        identificador,
        setIdentificador,
        mensagem,
        setMensagem,
        cep,
        setCep,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
