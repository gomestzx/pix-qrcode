import 'tailwindcss/tailwind.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Title from '@/app/components/ui/Title/Title';
import Accordion from '@/app/components/ui/Accordion/Accordion';
import Card from '@/app/components/ui/Card/Card';
import Footer from '@/app/components/Footer/Footer';
import Image from 'next/image';
import PostPreview from '@/app/components/Posts/PostPreview';
import Form from './components/Form/Form';
import CardGenerator from './components/CardGenerator/CardGenerator';
import Banner from './components/Banner/Banner';
import Faq from './components/Faq/Faq';


function App(): JSX.Element {
  return (
    <div className='font-montserrat'>
      <Navbar />
      <Title title='Gere seu QR Code PIX' description='Crie um QR Code para sua chave PIX 100% grátis' />
      <div className='flex flex-wrap-reverse justify-center font-medium'>
        <Form />
        <CardGenerator />
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

      <Banner />
      <Faq />

      <div className='w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap mb-4' id='blog'>
        <br />
        <div className='flex flex-wrap'>
          <PostPreview title='PIX: Entenda como funciona' slug='pix-entenda-como-funciona' img='1.png' />
          <PostPreview title='Como gerar um QR Code para sua chave PIX' slug='como-gerar-qr-code-pix' img='2.png?version=2' />
          <PostPreview title='Como gerar uma placa personalizada para sua chave PIX' slug='como-gerar-placa-pix' img='3.png?version=' />
          <PostPreview title='Aprenda como escanear um QR Code Pix' slug='como-escanear-qr-code-pix' img='4.png' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
