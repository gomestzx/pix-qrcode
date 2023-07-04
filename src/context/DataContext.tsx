'use client';
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface IDataContext {
  chave: string;
  setChave: Dispatch<SetStateAction<string>>;
  cidade: string;
  setCidade: Dispatch<SetStateAction<string>>;
  nome: string;
  setNome: Dispatch<SetStateAction<string>>;
  valor: number;
  setValor: Dispatch<SetStateAction<number>>;
  identificador: string;
  setIdentificador: Dispatch<SetStateAction<string>>;
  mensagem: string;
  setMensagem: Dispatch<SetStateAction<string>>;
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
  qrCode: string;
  setQrCode: Dispatch<SetStateAction<string>>;
  rawPix: string;
  setRawPix: Dispatch<SetStateAction<string>>;
  colorQrCode: string;
  setColorQrCode: Dispatch<SetStateAction<string>>;
  designQrCode: string;
  setDesignQrCode: Dispatch<SetStateAction<string>>;
}

interface IProvider {
  children: ReactNode;
}

export const DataContext = createContext<IDataContext>({} as IDataContext);

export function DataProvider({ children }: IProvider) {
  const [chave, setChave] = useState('');
  const [cidade, setCidade] = useState('');
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState<number>(0);
  const [identificador, setIdentificador] = useState('PGMTO123');
  const [mensagem, setMensagem] = useState('');
  const [cep, setCep] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [rawPix, setRawPix] = useState('');
  const [colorQrCode, setColorQrCode] = useState('#000000');
  const [designQrCode, setDesignQrCode] = useState('');

  return (
    <DataContext.Provider
      value={{
        chave,
        setChave,
        cidade,
        setCidade,
        nome,
        setNome,
        valor,
        setValor,
        identificador,
        setIdentificador,
        mensagem,
        setMensagem,
        cep,
        setCep,
        qrCode,
        setQrCode,
        rawPix,
        setRawPix,
        colorQrCode,
        setColorQrCode,
        designQrCode,
        setDesignQrCode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
