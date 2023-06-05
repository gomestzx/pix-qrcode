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
    mensagem,
    setMensagem,
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
  }, [chave, nome, cidade, identificador, mensagem, valor]);

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

  return (
    <div>
      <Header />
      <div className='flex flex-wrap-reverse justify-center align-middle md:p-8'>
        <div className='w-full p-4 md:p-0 md:w-3/6 flex flex-col items-center'>
          <TextInput
            value={chave}
            onChange={(e) => setChave(e.target.value)}
            label='Chave PIX'
            placeholder='Digite a chave'
          />
          <NumberInput
            onChange={handleChange}
            value={valor === 0 ? undefined : valor}
            label='Valor'
            placeholder='Digite o valor'
          />
          <TextInput
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            label='Nome do beneficiario'
            placeholder='Digite o nome'
          />
          <TextInput
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            label='Cidade do beneficiário ou da transação'
            placeholder='Digite a cidade'
          />
          <TextInput
            value={identificador}
            onChange={(e) => setIdentificador(e.target.value)}
            label='Código da transferência (opicional)'
            placeholder='PGMTO123'
          />
          <TextInput
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            label='Mensagem (opicional)'
            placeholder='Digite uma mensagem'
          />

          <button className='w-full md:w-9/12 rounded p-3 text-white font-normal bg-emerald-400' onClick={openModal}>
            Gerar QR Code
          </button>
        </div>

        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Example Modal'
          >
            <button onClick={closeModal}>x</button>
            <div>
              <Image src={qrCode} width={300} height={300} alt='' />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
