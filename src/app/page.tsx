'use client';
import { useEffect, useState } from 'react';
import { QrCodePix } from 'qrcode-pix';
import { useData } from '@/hooks/useData';
import TextInput from '@/components/TextInput/TextInput';
import 'tailwindcss/tailwind.css';
import Navbar from '@/components/Navbar/Navbar';
import NumberInput from '@/components/NumberInput/NumberInput';
import { Button } from '@/components/Button/Button';
import ModalComponent from '@/components/ModalComponent/ModalComponent';
import Title from '@/components/Title/Title';


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

      const qrCodeBase64 = await qrCodePix.base64();
      setQrCode(qrCodeBase64);
    }

    void generateDynamicPix();
  }, [chave, nome, cidade, identificador, valor]);

  const handleNumberValue = (e: any) => {
    const inputValue = e.target.value;
    const formattedValue = parseFloat(inputValue).toFixed(2);
    const numberValue = parseFloat(formattedValue);
    setValor(numberValue);
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div>
      <Navbar />
      <Title />
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
            onChange={handleNumberValue}
            value={valor === 0 ? undefined : valor}
            label='Valor (opcional)'
            placeholder='Digite o valor'
          />
          <Button
            label='Gerar QR Code'
            onClick={handleModal}
            isDisabled={!chave || !nome || !cidade}
          />
        </div>
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
    </div>
  );
}

export default App;
