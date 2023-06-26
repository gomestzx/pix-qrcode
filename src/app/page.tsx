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
import Accordion from '@/components/Accordion/Accordion';
import Card from '@/components/Card/Card';
import Footer from '@/components/Footer/Footer';

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
      const qrCodeBase64 = await generateDynamicPix(
        chave,
        nome,
        cidade,
        identificador,
        valor,
      );
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

  const dataAccordion = [
    {
      title: 'O que é Pix?',
      content:
        'O Pix é um sistema revolucionário de pagamentos instantâneos no Brasil, desenvolvido pelo Banco Central. Com o Pix, você pode transferir dinheiro de forma rápida, segura e disponível 24 horas por dia, todos os dias da semana, diretamente para a conta do destinatário. Com sua praticidade, é possível realizar pagamentos usando chaves cadastradas, como número de telefone celular, CPF, CNPJ ou e-mail, além de poder utilizar aplicativos de bancos, carteiras digitais e até mesmo ler QR codes. Simplifique suas transações financeiras com o Pix e aproveite a conveniência de transferências instantâneas.',
    },
    {
      title: 'Como funciona o gerador de QR Code Pix?',
      content:
        'Um gerador de QR Code Pix é uma ferramenta que permite criar códigos QR personalizados para receber pagamentos por meio do sistema Pix. Ao fornecer as informações necessárias, como o valor e a descrição da transação, o gerador cria um código QR único. Ao escanear esse código com um aplicativo compatível, o pagador pode confirmar e autorizar o pagamento, que é transferido instantaneamente da conta do pagador para a do recebedor. Com sua praticidade e segurança, o gerador de QR Code Pix simplifica o processo de receber pagamentos, eliminando a necessidade de compartilhar dados bancários e agilizando as transações.',
    },
    {
      title: 'O QR Code Pix é gratuito?',
      content:
        'O QR Code Pix é 100% gratuito. Você pode utilizá-lo quantas vezes quiser.',
    },
  ];

  return (
    <div>
      <Navbar />
      <Title />
      <div className='flex flex-wrap-reverse justify-around'>
        <div className='w-full p-4 md:p-2 md:py-8 md:w-3/6 rounded flex flex-col items-center shadow-md bg-white'>
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setChave(e.target.value)
            }
            label='Chave PIX'
            placeholder='Digite a chave'
          />
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
            label='Nome do beneficiario'
            placeholder='Digite o nome'
          />
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCidade(e.target.value)
            }
            label='Cidade do beneficiário ou da transação'
            placeholder='Digite a cidade'
          />
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIdentificador(e.target.value)
            }
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
      <div
        className='w-full md:w-3/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap'
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
      <div className='w-full md:w-3/6 mx-auto mt-8 py-4' id='perguntas-frequentes'>
        <h2 className='my-4 text-2xl text-md text-gray-600 p-4 md:p-0'>
          Perguntas frequentes
        </h2>
        {dataAccordion.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
