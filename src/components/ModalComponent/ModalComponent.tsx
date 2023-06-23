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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

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
        style={customStyles}
      >
        <div className='flex flex-col items-center justify-center'>
          <button onClick={props.closeModal} className='w-full text-right text-2xl'>
            x
          </button>
          <div id='qrCode'>
            <Image
              ref={qrCodeImageRef}
              src={props.qrCode}
              width={300}
              height={300}
              alt=''
            />
          </div>

          <button
            className='w-full md:w-9/12 rounded p-3 text-white font-normal bg-emerald-600'
            onClick={HandleDownloadQRCode}
          >
            Baixar QR CODE
          </button>
          <div className='flex items-start justify-center flex-col mt-4 mx-6 w-full md:w-9/12'>
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
                <span className='font-semibold'>Cidade:</span> {props.valor}
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
