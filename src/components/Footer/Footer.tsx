import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full border-t-4 border-teal-500 bg-neutral-800 p-10 flex-wrap'>
      <div className='flex justify-center'>
        <Link href='/privacidade' className='text-white m-2'>
          Privacidade
        </Link>
        <Link href='/termos-de-servico' className='text-white m-2'>
          Termos de Serviço
        </Link>
        <Link href='mailto:contato@qr-code-pix.com.br' className='text-white m-2'>
          Contato
        </Link>
      </div>

      <h2 className=' text-white text-center text-sm'>
        © 2023 qr-code-pix.com.br
      </h2>
    </div>
  );
};

export default Footer;
