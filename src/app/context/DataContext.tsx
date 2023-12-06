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
  openTemplate: boolean;
  setOpenTemplate: Dispatch<SetStateAction<boolean>>;
  template: string;
  setTemplate: Dispatch<SetStateAction<string>>;
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  imagemCarregada: boolean;
  setImagemCarregada: Dispatch<SetStateAction<boolean>>;
}

interface IProvider {
  children: ReactNode;
}

export const DataContext = createContext<IDataContext>({} as IDataContext);

export function DataProvider({ children }: IProvider) {
  const [chave, setChave] = useState('sua chave');
  const [cidade, setCidade] = useState('');
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState<number>(0);
  const [identificador, setIdentificador] = useState('PGMTO123');
  const [mensagem, setMensagem] = useState('');
  const [cep, setCep] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [rawPix, setRawPix] = useState('');
  const [colorQrCode, setColorQrCode] = useState('#000000');
  const [openTemplate, setOpenTemplate] = useState(false);
  const [template, setTemplate] = useState('1');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imagemCarregada, setImagemCarregada] = useState(false);

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
        openTemplate,
        setOpenTemplate,
        template,
        setTemplate,
        modalIsOpen,
        setIsOpen,
        imagemCarregada,
        setImagemCarregada
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
