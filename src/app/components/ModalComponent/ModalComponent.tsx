import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { downloadQRCode } from '@/app/utils/DownloadQRCode';
import { IModalComponentProps } from './types';
import { QRCodeSVG } from 'qrcode.react';
import { useData } from '@/app/hooks/useData';
import Accordion from '../ui/Accordion/Accordion';
import ColorButton from '../ui/ColorButton/ColorButton';

const ModalComponent = (props: IModalComponentProps) => {
  const qrCodeImageRef = useRef<HTMLImageElement>(null);

  function HandleDownloadQRCode() {
    downloadQRCode(qrCodeImageRef);
  }

  const { colorQrCode, rawPix } = useData();

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
          <div
            id='qrCode'
            className='flex items-center justify-center relative p-4'
          >
            <QRCodeSVG
              value={rawPix}
              size={190}
              bgColor={'#ffffff'}
              fgColor={colorQrCode}
              level={'L'}
              includeMargin={false}
              imageSettings={{
                src: '',
                x: undefined,
                y: undefined,
                height: 28,
                width: 28,
                excavate: true,
              }}
            />
            <Image
              src='/pix.png'
              alt=''
              width={28}
              height={28}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded'
            />
          </div>
          <div className='mt-2'>
            {/* <Accordion title='Design' content='' /> */}
            <Accordion
              title='Color'
              content={
                <div className='flex'>
                  <ColorButton defaultChecked value='000000' />
                  <ColorButton value='547896' />
                  <ColorButton value='2FBCAD' />
                  <ColorButton value='FF0060' />
                  <ColorButton value='1D267D' />
                </div>
              }
            />
          </div>

          <button
            className='w-full rounded p-3 text-white font-normal bg-emerald-400 mt-4'
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
