'use client';
import { useEffect, useState } from 'react';
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
    async function fetchDynamicPix() {
      const qrCodeBase64 = await generateDynamicPix(chave, nome, cidade, identificador, valor);
      setQrCode(qrCodeBase64);
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

  return (
    <div>
      <Navbar />
      <Title />
      <div className='flex flex-wrap-reverse justify-center'>
        <div className='w-full p-4 md:p-0 md:w-3/6 flex flex-col items-center'>
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) => setChave(e.target.value)}
            label='Chave PIX'
            placeholder='Digite a chave'
          />
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
            label='Nome do beneficiario'
            placeholder='Digite o nome'
          />
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCidade(e.target.value)}
            label='Cidade do beneficiário ou da transação'
            placeholder='Digite a cidade'
          />
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) => setIdentificador(e.target.value)}
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
