'use client';
import { useEffect, useState } from 'react';
import { QrCodePix } from 'qrcode-pix';
import { useData } from '@/hooks/useData';
import TextInput from '@/components/TextInput/TextInput';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Header from '@/components/Header/Header';
import NumberInput from '@/components/NumberInput/NumberInput';

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
        value: valor,
        name: nome,
        city: cidade,
        transactionId: identificador,
        message: mensagem,
      });

      const rawPixStr = qrCodePix.payload();
      const qrCodeBase64 = await qrCodePix.base64();

      setRawPix(rawPixStr);
      setQrCode(qrCodeBase64);
    }

    void generateDynamicPix();
  }, [chave, nome, cidade, identificador, mensagem, valor]);

  function formatCurrency(value) {
    return parseFloat(value).toFixed(2);
  }

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatCurrency(inputValue);
    const numberValue = parseFloat(formattedValue);
    setValor(numberValue);
  };

  return (
    <div>
      <Header />
      <div className='flex flex-wrap-reverse justify-center align-middle md:p-8'>
        <div className='w-full p-8 md:p-0 md:w-3/6'>
          <TextInput
            value={chave}
            onChange={(e) => setChave(e.target.value)}
            label='Chave PIX'
            placeholder='Digite a chave'
          />
          <NumberInput
            onChange={handleChange}
            value={valor}
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
        </div>
        <div>
          <Image src={qrCode} width={300} height={300} alt='' />
        </div>
      </div>
    </div>
  );
}

export default App;
