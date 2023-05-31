'use client';
import { createContext, useState } from 'react';

interface IDataContext {
  chave: string;
  setChave(e: any): void;
  cidade: string;
  setCidade(e: any): void;
  recebedor: string;
  setRecebedor(e: any): void;
  valor: string;
  setValor(e: any): void;
  identificador: string;
  setIdentificador(e: any): void;
  mensagem: string;
  setMensagem(e: any): void;
  cep: string;
  setCep(e: any): void;
}

interface IProvider {
  children: React.ReactNode;
}

export const DataContext = createContext({} as IDataContext);

export function DataProvider({ children }: IProvider) {
  const [chave, setChave] = useState('');
  const [cidade, setCidade] = useState('')
  const [recebedor, setRecebedor] = useState('')
  const [valor, setValor] = useState('')
  const [identificador, setIdentificador] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [cep, setCep] = useState('')
  return (
    <DataContext.Provider
      value={{
        chave: chave,
        setChave,
        cidade: cidade,
        setCidade,
        recebedor: recebedor,
        setRecebedor,
        valor: valor,
        setValor,
        identificador,
        setIdentificador,
        mensagem,
        setMensagem,
        cep,
        setCep
      }}
    >
      {children}
    </DataContext.Provider>
  );
}