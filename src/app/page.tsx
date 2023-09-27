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
import { SEO } from '@/components/SEO';



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
    <>
      <SEO title='Criar QR Code e Placa PIX' shouldExcludeTitleSuffix description='Crie seu QR Code e Placa PIX 100% grátis'/>
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
                <div className='lg:w-3/6 w-full flex items-center justify-center'>
                  <div className=' relative' id='placa-pix' ref={placaPixImageRef}>
                    <Image src={`/templates/${template}.png`} width={465} height={700} alt='template' />
                    <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center">
                      <div className='p-2 bg-white'>
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
                    <div className="p-0 absolute inset-x-0 inset-y-100 flex items-center justify-center">
                      <h3 style={{ wordBreak: 'break-word' }} className='max-w-[80%] text-cente flex items-center justify-center break-words'>{chave}</h3>
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
          className='w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap'
          id='perguntas-frequentes'
        >
          <Card
            img='/img1.png'
            titulo='Grátis'
            conteudo='Crie quantos QR Codes quiser!'
          />
          <Card
            img='/img2.png'
            titulo='Desing'
            conteudo='Melhore sua forma de pagamentos via Pix'
          />
          <Card
            img='/img3.png'
            titulo='Seguro'
            conteudo='Não armazenamos nenhum dado'
          />
        </div>
        <div
          className='w-full md:w-4/6 mx-auto mt-8 py-4'
          id='perguntas-frequentes'
        >
          <h2 className='my-4 text-2xl text-md text-gray-600 p-4 md:p-0'>
            Perguntas frequentes
          </h2>
          <Accordion
            title='O que é Pix?'
            content='O Pix é um sistema revolucionário de pagamentos instantâneos no Brasil, desenvolvido pelo Banco Central. Com o Pix, você pode transferir dinheiro de forma rápida, segura e disponível 24 horas por dia, todos os dias da semana, diretamente para a conta do destinatário. Com sua praticidade, é possível realizar pagamentos usando chaves cadastradas, como número de telefone celular, CPF, CNPJ ou e-mail, além de poder utilizar aplicativos de bancos, carteiras digitais e até mesmo ler QR codes. Simplifique suas transações financeiras com o Pix e aproveite a conveniência de transferências instantâneas.'
          />
          <Accordion
            title='Como funciona o gerador de QR Code Pix?'
            content='Um gerador de QR Code Pix é uma ferramenta que permite criar códigos QR personalizados para receber pagamentos por meio do sistema Pix. Ao fornecer as informações necessárias, como o valor e a descrição da transação, o gerador cria um código QR único. Ao escanear esse código com um aplicativo compatível, o pagador pode confirmar e autorizar o pagamento, que é transferido instantaneamente da conta do pagador para a do recebedor. Com sua praticidade e segurança, o gerador de QR Code Pix simplifica o processo de receber pagamentos, eliminando a necessidade de compartilhar dados bancários e agilizando as transações.'
          />
          <Accordion
            title='O QR Code Pix é gratuito?'
            content='O Pix é um sistema revolucionário de pagamentos instantâneos no Brasil, desenvolvido pelo Banco Central. Com o Pix, você pode transferir dinheiro de forma rápida, segura e disponível 24 horas por dia, todos os dias da semana, diretamente para a conta do destinatário. Com sua praticidade, é possível realizar pagamentos usando chaves cadastradas, como número de telefone celular, CPF, CNPJ ou e-mail, além de poder utilizar aplicativos de bancos, carteiras digitais e até mesmo ler QR codes. Simplifique suas transações financeiras com o Pix e aproveite a conveniência de transferências instantâneas.'
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
