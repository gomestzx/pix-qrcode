import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { downloadQRCode } from '@/utils/DownloadQRCode';

interface IModalComponentProps {
  isOpen: boolean;
  qrCode: string;
  chave: string;
  nome: string;
  cidade: string;
  valor?: number;
  closeModal(e: any): void;
}

const ModalComponent = (props: IModalComponentProps) => {
  const qrCodeImageRef = useRef<HTMLImageElement>(null);

  function HandleDownloadQRCode() {
    downloadQRCode(qrCodeImageRef);
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel='Example Modal'
        className='fixed inset-0 flex items-center justify-center'
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <div className='bg-white p-6 rounded-lg max-w-md w-full md:max-w-screen-md md:w-auto'>
          <button
            onClick={props.closeModal}
            className='text-right text-2xl w-full'
          >
            x
          </button>
          <div id='qrCode' className='flex items-center justify-center'>
            <Image
              ref={qrCodeImageRef}
              src={props.qrCode}
              width={300}
              height={300}
              alt=''
            />
          </div>

          <button
            className='w-full rounded p-3 text-white font-normal bg-emerald-600'
            onClick={HandleDownloadQRCode}
          >
            Baixar QR CODE
          </button>
          <div className='flex items-start justify-center flex-col mt-4 w-full md:w-9/12'>
            <p className='w-full'>
              <span className='font-semibold'>Chave:</span> {props.chave}
            </p>
            <p className='w-full'>
              <span className='font-semibold'>Nome:</span> {props.nome}
            </p>
            <p className='w-full'>
              <span className='font-semibold'>Cidade:</span> {props.cidade}
            </p>
            {props.valor ? (
              <p className='w-full'>
                <span className='font-semibold'>Valor:</span> {props.valor}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
