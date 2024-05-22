'use client';
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

interface IQRCodeContext {
  qrcode: IQrCode;
  setQrCodeData: Dispatch<SetStateAction<IQrCode>>;
}

interface IProvider {
  children: ReactNode;
}

export const QRCodeContext = createContext<IQRCodeContext>({} as IQRCodeContext);

export function QRCodeProvider({ children }: IProvider) {
  const [qrcode, setQrCodeData] = useState<IQrCode>({
    chave: 'sua chave',
    cidade: '',
    nome: '',
    valor: 0,
    identificador: 'PGMTO123',
    mensagem: '',
    qrCode: '',
    rawPix: '',
    colorQrCode: '#000000',
    template: '1',
  });

  return (
    <QRCodeContext.Provider value={{ qrcode, setQrCodeData }}>
      {children}
    </QRCodeContext.Provider>
  );
}
