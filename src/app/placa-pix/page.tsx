import 'tailwindcss/tailwind.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Title from '@/app/components/ui/Title/Title';
import Accordion from '@/app/components/ui/Accordion/Accordion';
import Card from '@/app/components/ui/Card/Card';
import Footer from '@/app/components/Footer/Footer';
import Image from 'next/image';
import PostPreview from '@/app/components/Posts/PostPreview';
import PlateGenerator from '@/app/components/PlateGenerator/PlateGenerator';

export const metadata = {
  title: 'Gerar Placa Personalizada para PIX',
  description: 'O Pix QR Code é uma ferramenta online que gera QR Codes e placas personalizadas que facilitam o recebimento de pagamentos no sistema Pix.',
  keywords: ['QR Code PIX', 'Placa PIX', 'QR Code pix', 'Chave PIX QR Code', 'Criar QR Code pix'],
  openGraph: {
    title: 'Gerar QRCode PIX',
    url: 'https://www.pix-qr-code.com.br'
  }
}

function PlateGeneratorPage(): JSX.Element {
  return (
    <div className='font-montserrat'>
      <Navbar />
      <Title title='Gere sua placa PIX' description='Crie uma placa personalizada para sua chave PIX 100% grátis' />
      <div className='flex flex-wrap-reverse justify-center font-medium'>
        <PlateGenerator />
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
          <PostPreview title='Aprenda como escanear um QR Code Pix' slug='como-escanear-qr-code-pix' img='4.png' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PlateGeneratorPage;
