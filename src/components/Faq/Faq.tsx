import React from 'react'
import Accordion from '../ui/Accordion/Accordion'

const Faq = () => {
    return (
        <>
            <div
                className='w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap mb-4'
            >

                <Accordion
                    title='Como gerar QR Code para minha chave PIX?'
                    content='Preencha o formulário com os dados necessários, como chave Pix, valor da transação (se desejar um QR Code estático), e qualquer outra informação relevante. Após preencher, clique no botão "Baixar QR Code"'
                />
                <Accordion
                    title='Como gerar placas personalizadas para minha chave PIX?'
                    content='Clique no botão "Gerar Placa Pix", preencha com os dados necessários, escolha o design de sua preferência e faça o download da placa.'
                />
                <Accordion
                    title='O gerador de placa personalizada é gratuito?'
                    content="Sim, todas as ferramentas disponíveis em nosso site são completamente gratuitas."
                />

            </div></>
    )
}

export default Faq