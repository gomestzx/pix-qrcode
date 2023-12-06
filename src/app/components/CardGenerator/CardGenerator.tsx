'use client'
import React, { useRef } from 'react'
import ModalComponent from '../ModalComponent/ModalComponent'
import Accordion from '../ui/Accordion/Accordion'
import { Button } from '../ui/Button/Button'
import ColorButton from '../ui/ColorButton/ColorButton'
import { useData } from '@/app/hooks/useData'
import Image from 'next/image'
import { downloadQRCode } from '@/app/utils/DownloadQRCode'
import QRCode from '../QRCode/QRCode'

const CardGenerator = () => {
  const placaPixImageRef = useRef<HTMLImageElement>(null);

  const {
    chave,
    nome,
    cidade,
    valor,
    qrCode,
    rawPix,
    colorQrCode,
    template,
    openTemplate,
    setOpenTemplate,
    setTemplate,
    modalIsOpen,
    setIsOpen,
    imagemCarregada,
    setImagemCarregada
  } = useData();

  function handleModal() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function HandleDownloadPlacaPix() {
    downloadQRCode(placaPixImageRef);
  }
  return (
    <>
      {openTemplate &&
        <div className='mt-4 w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded  shadow-lg bg-white'>
          <button className=' flex items-start justify-start mb-4' onClick={() => setOpenTemplate(false)}>
            <Image src='/voltar.png' width={20} height={20} alt='voltar' />
            <span className=' text-teal-500' >Voltar ao início</span>
          </button>

          <div className='flex flex-wrap items-start'>
            <div className='lg:w-3/6 w-full flex items-center justify-center flex-wrap'>
              <div className='relative' id='placa-pix' ref={placaPixImageRef}>
                <img src={`/templates/${template}.png`} alt="" onLoad={() => setImagemCarregada(true)} />
                {
                  imagemCarregada && <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center">
                    <QRCode value={rawPix} color={colorQrCode} />
                  </div>
                }
                <div className="absolute inset-x-0 bottom-0 mb-18 md:mb-28 lg:mb-14 xl:mb-20 md:text-xl lg:text-sm xl:text-lg text-base flex items-center justify-center">
                  <h3 style={{ wordBreak: 'break-word' }} className="max-w-[80%] text-center flex items-center justify-center break-words">{chave}</h3>
                </div>
              </div>
            </div>
            <div
              className=' bg-white w-full lg:w-3/6 px-4 flex-col justify-center flex'
            >
              <h3 className='mb-2 mt-4 lg:mt-0'>Escolha o template</h3>
              <div className=' bg-gray-100 overflow-x-auto flex flex-wrap justify-center h-100 gap-2'>
                <button onClick={() => setTemplate('1')}>
                  <Image src='/previews/default.png' width={150} height={150} alt='' />
                </button>
                <button onClick={() => setTemplate('2')}>
                  <Image src='/previews/blue.png' width={150} height={150} alt='' />
                </button>
                <button onClick={() => setTemplate('3')}>
                  <Image src='/previews/logos.png' width={150} height={150} alt='' />
                </button>
                <button onClick={() => setTemplate('4')}>
                  <Image src='/previews/pink.png' width={150} height={150} alt='' />
                </button>
                <button onClick={() => setTemplate('5')}>
                  <Image src='/previews/pinkandblue.png' width={150} height={150} alt='' />
                </button>
                <button onClick={() => setTemplate('6')}>
                  <Image src='/previews/paper.png' width={150} height={150} alt='' />
                </button>

              </div>

              <div className='mb-2'>
                <Accordion
                  title='Cor'
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
              <Button
                label='Download Placa Pix'
                onClick={HandleDownloadPlacaPix}
              />
            </div>
          </div>
        </div>}
      <ModalComponent
        closeModal={handleModal}
        valor={valor ?? 0}
        nome={nome}
        cidade={cidade}
        chave={chave}
        qrCode={qrCode}
        isOpen={modalIsOpen}
      />
    </>
  )
}

export default CardGenerator