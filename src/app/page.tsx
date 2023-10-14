'use client';
import { useEffect, useState, useRef } from 'react';
import { ChangeEvent } from 'react';
import { useData } from '@/hooks/useData';
import TextInput from '@/components/TextInput/TextInput';
import 'tailwindcss/tailwind.css';
import Navbar from '@/components/Navbar/Navbar';
import NumberInput from '@/components/NumberInput/NumberInput';
import { Button } from '@/components/Button/Button';
import ModalComponent from '@/components/ModalComponent/ModalComponent';
import Title from '@/components/Title/Title';
import { generateDynamicPix } from '@/utils/GenerateQRCode';
import Accordion from '@/components/Accordion/Accordion';
import Card from '@/components/Card/Card';
import Footer from '@/components/Footer/Footer';
import { QRCodeSVG } from 'qrcode.react';
import ColorButton from '@/components/ColorButton/ColorButton';
import { downloadQRCode } from '@/utils/DownloadQRCode';
import Image from 'next/image';
import DropdownWithInput from '@/components/DropdownWithInput/DropdownWithInput';
import QRCode from '@/components/QRCode/QRCode';
import PostPreview from '@/components/Posts/PostPreview';



function App(): JSX.Element {
  const {
    chave,
    setChave,
    nome,
    setNome,
    cidade,
    setCidade,
    valor,
    setValor,
    identificador,
    setIdentificador,
    qrCode,
    setQrCode,
    rawPix,
    setRawPix,
    colorQrCode,
    template,
    openTemplate,
    setOpenTemplate,
    setTemplate
  } = useData();

  const qrCodeImageRef = useRef<HTMLImageElement>(null);
  const placaPixImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    async function fetchDynamicPix() {
      const { qrCodeBase64, rawQrCode } = await generateDynamicPix(
        chave,
        nome,
        cidade,
        identificador,
        valor,
      );
      setQrCode(qrCodeBase64);
      setRawPix(rawQrCode);
    }

    void fetchDynamicPix();
  }, [chave, nome, cidade, identificador, valor]);

  const handleNumberValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = parseFloat(inputValue).toFixed(2);
    const numberValue = parseFloat(formattedValue);
    setValor(numberValue);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [imagemCarregada, setImagemCarregada] = useState(false);

  function handleModal() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function HandleDownloadQRCode() {
    downloadQRCode(qrCodeImageRef);
  }

  function HandleDownloadPlacaPix() {
    downloadQRCode(placaPixImageRef);
  }

  return (
    <div>
      <Navbar />
      {!openTemplate && <Title />}

      <div className='flex flex-wrap-reverse justify-center'>
        {!openTemplate &&
          <div className='w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded flex flex-wrap items-center shadow-lg bg-white'>
            <div id='inputs' className='lg:w-4/6 w-full'>
              <DropdownWithInput />
              <TextInput
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNome(e.target.value)
                }
                label='Nome do beneficiario'
                placeholder='Digite seu nome'
                value={nome}
              />
              <TextInput
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCidade(e.target.value)
                }
                label='Cidade do beneficiário ou da transação'
                placeholder='Digite sua cidade'
                value={cidade}
              />
              <TextInput
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setIdentificador(e.target.value)
                }
                label='Código da transferência (opicional)'
                placeholder='PGMTO123'
                value={identificador === 'PGMTO123' ? '' : identificador}
              />
              <NumberInput
                onChange={handleNumberValue}
                value={valor === 0 ? undefined : valor}
                label='Valor (opcional)'
                placeholder='Digite o valor'
              />
              <Button
                label='Gerar QR Code'
                onClick={handleModal}
                isDisabled={!chave || !nome || !cidade}
                mobile
              />
              <Button
                label='Criar Placa Pix'
                isDisabled={!chave || !nome || !cidade}
                onClick={() => setOpenTemplate(true)}
                background='bg-purple-600'
                mobile
              />
            </div>
            <div
              className=' bg-white w-full lg:w-2/6 px-4 flex-col justify-center lg:flex hidden'
            >
              <div
                className='w-ful flex justify-center items-center p-4 relative'
              >
                <div className='p-1' ref={qrCodeImageRef} id='QRcode'>
                  <QRCodeSVG
                    value={rawPix}
                    size={210}
                    bgColor={'#ffffff'}
                    fgColor={colorQrCode}
                    level={'L'}
                    includeMargin={false}
                  />

                </div>

              </div>

              <div className='mt-2'>
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
                label='Download PNG'
                onClick={HandleDownloadQRCode}
                isDisabled={!chave || !nome || !cidade}
              />
              <Button
                label='Criar Placa Pix'
                isDisabled={!chave || !nome || !cidade}
                onClick={() => setOpenTemplate(true)}
                background='bg-purple-600'
              />
            </div>
          </div>}

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
                <div className=' bg-gray-100 p-2 overflow-x-auto flex flex-wrap justify-center h-100'>
                  <button className='p-2' onClick={() => setTemplate('1')}>
                    <Image src='/previews/default.png' width={150} height={150} alt='' />
                  </button>
                  <button className='p-2' onClick={() => setTemplate('2')}>
                    <Image src='/previews/blue.png' width={150} height={150} alt='' />
                  </button>
                  <button className='p-2' onClick={() => setTemplate('3')}>
                    <Image src='/previews/logos.png' width={150} height={150} alt='' />
                  </button>
                  <button className='p-2' onClick={() => setTemplate('4')}>
                    <Image src='/previews/pink.png' width={150} height={150} alt='' />
                  </button>
                  <button className='p-2' onClick={() => setTemplate('5')}>
                    <Image src='/previews/pinkandblue.png' width={150} height={150} alt='' />
                  </button>
                  <button className='p-2' onClick={() => setTemplate('6')}>
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
      </div>

      <div
        className='w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap mb-4'
      >
        <Card
          img='/img1.png'
          titulo='Grátis'
          conteudo='Crie quantos QR Codes quiser!'
        />
        <Card
          img='/img2.png'
          titulo='Design'
          conteudo='Melhore sua forma de pagamentos via Pix'
        />
        <Card
          img='/img3.png'
          titulo='Seguro'
          conteudo='Não armazenamos nenhum dado'
        />
      </div>

      <div className='w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap' id='perguntas-frequentes'>
        <div className='flex flex-wrap items-center'>
          <div className='lg:w-3/6 w-full flex items-center justify-center'>
            <Image src='/preview_placas.png' width={1080} height={1080} alt='preview_placas_pix' />
          </div>

          <div
            className='w-full lg:w-3/6 px-4 flex-col justify-center items-center flex'
          >

            <Accordion
              open
              title='Como criar minha placa personalizada?'
              content={
                <div> <p className='mb-2'>Basta adicionar os dados obrigatórios: </p>
                  <ul>
                    <li className='text-teal-700 text-bold'>1 - Chave PIX</li>
                    <li className='text-teal-700'>2 - Nome</li>
                    <li className='text-teal-700'>3 - Cidade</li>
                  </ul>
                  <p className='mt-2'> e clicar no botão "Criar Placa Pix" </p></div>}
            />
            <Accordion
              title='Como mudar o design?'
              content='Disponiblizamos vários tipos de design para que possam atender a sua demanda. Para escolher, basta clicar no design desejado.'
            />
            <Accordion
              title='O gerador de placa personalizada é gratuito?'
              content='Todas as ferramentas do nosso site são 100% gratuitas'
            />

          </div>
        </div>

      </div>

      <div className='w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap mb-4' id='blog'>
        <br />
        <div className='flex flex-wrap'>
          <PostPreview title='PIX: Entenda como funciona' slug='pix-entenda-como-funciona' img='1.png' />
          <PostPreview title='Passos para gerar um QR Code para sua chave PIX' slug='passos-para-gerar-qr-code-pix' img='2.png?version=2' />
          <PostPreview title='Passos para gerar uma placa personalizada para sua chave PIX' slug='passos-para-gerar-placa-pix' img='3.png?version=' />
          <PostPreview title='Aprenda como escanear um QR Code Pix' subtitle='test' slug='como-escanear-qr-code-pix' img='4.png' />
        </div>
      </div>

      

      <Footer />
    </div>
  );
}

export default App;
