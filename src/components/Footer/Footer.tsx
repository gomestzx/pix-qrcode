import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full lg:w-4/6 mx-auto  py-8'>
      <div className='flex flex-col lg:flex-row px-8 lg:px-0 gap-8 lg:gap-2 flex-wrap justify-between'>
        <div className='w-auto lg:w-1/4'>
          <img
            src="/logo.png"
            alt="logo"
            style={{ height: "30px", maxWidth: "100%" }}
          />
          <p className=' text-base text- mt-2'>Gerador de QR Code e Placa personalizada PIX</p>
        </div>
        <div>
          <h1 className=' font-mulish font-extrabold text-lg'>Ferramentas</h1>
          <div className=' flex flex-col mt-2 gap-2'>
            <Link href='/' className='text-base text-gray-600'>
              Gerador de QR Code PIX
            </Link>
            <Link href='/placa-pix' className='text-base text-gray-600'>
              Gerador de Placa Personalizada PIX
            </Link>
          </div>
        </div>
        <div>
          <h1 className=' font-mulish font-extrabold text-lg'>Sobre</h1>
          <div className=' flex flex-col mt-2 gap-2'>
            <Link href='/sobre' className='text-base text-gray-600'>
              Sobre nós
            </Link>
            <Link href='/blog' className='text-base text-gray-600'>
              Blog
            </Link>
            <Link href='/#faq' className='text-base text-gray-600'>
              FAQ
            </Link>
            <Link href='mailto:contato@qr-code-pix.com.br' className='text-base text-gray-600'>
              Contato
            </Link>
          </div>
        </div>
        <div>
          <h1 className=' font-mulish font-extrabold text-lg'>Legal</h1>
          <div className=' flex flex-col mt-2 gap-2'>
            <Link href='/privacidade' className='text-base text-gray-600'>
              Privacidade
            </Link>
            <Link href='/termos-de-servico' className='text-base text-gray-600'>
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
      <h2 className=' text-center text-base text-gray-600 py-20'>
        © 2024 qr-code-pix.com.br
      </h2>
    </div>
  );
};

export default Footer;