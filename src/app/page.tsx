'use client';
import { useEffect, useState } from 'react';
import { QrCodePix } from 'qrcode-pix';
import { useData } from '@/hooks/useData';
import TextInput from '@/components/TextInput/TextInput';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Header from '@/components/Header/Header';
import NumberInput from '@/components/NumberInput/NumberInput';
import Modal from 'react-modal';
import { Button } from '@/components/Button/Button';


function App(): JSX.Element {
  const [qrCode, setQrCode] = useState<string>('');
  const [rawPix, setRawPix] = useState<string>('');
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
  } = useData();

  useEffect(() => {
    async function generateDynamicPix() {
      const qrCodePix = QrCodePix({
        version: '01',
        key: chave,
        name: nome,
        city: cidade,
        transactionId: identificador,
        value: valor ?? 0,
      });

      const rawPixStr = qrCodePix.payload();
      const qrCodeBase64 = await qrCodePix.base64();

      setRawPix(rawPixStr);
      setQrCode(qrCodeBase64);
    }

    void generateDynamicPix();
  }, [chave, nome, cidade, identificador, valor]);

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    const formattedValue = parseFloat(inputValue).toFixed(2);
    const numberValue = parseFloat(formattedValue);
    setValor(numberValue);
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <Header />
      <div className='p-4'>
        <h1 className=' text-4xl lg:text-5xl text-emerald-400 text-center mt-6 font-bold'>
          Gere seu QR Code PIX
        </h1>
        <p className='text-center text-md text-gray-600'>
          Crie um QR Code para sua chave PIX 100% grátis
        </p>
      </div>
      <img src="/img2.png" alt="Imagem" className="fixed top-1/4 right-20 hidden xl:block " style={{width: '320px'}}/>
      <img src="/img1.png" alt="Imagem" className="fixed top-1/4 left-20 hidden xl:block" style={{width: '320px'}} />
      <div className='flex flex-wrap-reverse justify-center'>
        <div className='w-full p-4 md:p-0 md:w-3/6 flex flex-col items-center'>
          <TextInput
            onChange={(e: any) => setChave(e.target.value)}
            label='Chave PIX'
            placeholder='Digite a chave'
          />
          <TextInput
            onChange={(e: any) => setNome(e.target.value)}
            label='Nome do beneficiario'
            placeholder='Digite o nome'
          />
          <TextInput
            onChange={(e: any) => setCidade(e.target.value)}
            label='Cidade do beneficiário ou da transação'
            placeholder='Digite a cidade'
          />
          <TextInput
            onChange={(e: any) => setIdentificador(e.target.value)}
            label='Código da transferência (opicional)'
            placeholder='PGMTO123'
          />
          <NumberInput
            onChange={handleChange}
            value={valor === 0 ? undefined : valor}
            label='Valor (opcional)'
            placeholder='Digite o valor'
          />
          <Button label='Gerar QR Code' onClick={openModal} isDisabled={!chave || !nome || !cidade} />
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Example Modal'
          style={customStyles}
        >
          <div className='flex flex-col items-center justify-center'>
          <button onClick={closeModal} className='w-full text-right text-2xl'>
            x
          </button>
          <div>
            <Image src={qrCode} width={300} height={300} alt='' />
          </div>
          
            <button
              className='w-full md:w-9/12 rounded p-3 text-white font-normal bg-emerald-600'
            >
              Baixar QR CODE
            </button>
          
          <div className='flex items-start justify-center flex-col mt-4 mx-6 w-full md:w-9/12'>
            <p className='w-full'><span className='font-semibold'>Chave:</span> {chave}</p>
            <p className='w-full'><span className='font-semibold'>Nome:</span> {nome}</p>
            <p className='w-full'><span className='font-semibold'>Cidade:</span> {cidade}</p>
            {valor ? <p className='w-full'><span className='font-semibold'>Cidade:</span> {valor}</p> : <></>}
          </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
