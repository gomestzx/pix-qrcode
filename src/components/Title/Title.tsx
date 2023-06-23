import React from 'react';

const Title = () => {
  return (
    <>
      <div className='p-4'>
        <h1 className=' text-4xl lg:text-5xl text-emerald-400 text-center mt-6 font-bold'>
          Gere seu QR Code PIX
        </h1>
        <p className='text-center text-md text-gray-600'>
          Crie um QR Code para sua chave PIX 100% grátis
        </p>
      </div>
      <img
        src='/img2.png'
        alt='Imagem'
        className='fixed top-1/4 right-20 hidden xl:block '
        style={{ width: '320px' }}
      />
      <img
        src='/img1.png'
        alt='Imagem'
        className='fixed top-1/4 left-20 hidden xl:block'
        style={{ width: '320px' }}
      />
    </>
  );
};

export default Title;
