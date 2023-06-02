'use client';
import { createContext, useState } from 'react';

interface IDataContext {
  chave: string;
  setChave(e: any): void;
  cidade: string;
  setCidade(e: any): void;
  nome: string;
  setNome(e: any): void;
  valor: number;
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
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState<number>(0)
  const [identificador, setIdentificador] = useState('PGMTO123')
  const [mensagem, setMensagem] = useState('')
  const [cep, setCep] = useState('')
  return (
    <DataContext.Provider
      value={{
        chave: chave,
        setChave,
        cidade: cidade,
        setCidade,
        nome: nome,
        setNome,
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