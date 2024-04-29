import React from 'react'
import Accordion from '../ui/Accordion/Accordion'

const Faq = () => {
    return (
        <>
            <div
                className='w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap mb-4'
            >

                <Accordion
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

            </div></>
    )
}

export default Faq