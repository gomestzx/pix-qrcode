'use client'
import { QRCodeSVG } from 'qrcode.react'
import React, { ChangeEvent, useEffect, useRef } from 'react'
import Accordion from '../ui/Accordion/Accordion'
import { Button } from '../ui/Button/Button'
import ColorButton from '../ui/ColorButton/ColorButton'
import DropdownWithInput from '../ui/DropdownWithInput/DropdownWithInput'
import NumberInput from '../ui/NumberInput/NumberInput'
import TextInput from '../ui/TextInput/TextInput'
import { useData } from '@/app/hooks/useData'
import { downloadQRCode } from '@/app/utils/DownloadQRCode'
import { generateDynamicPix } from '@/app/utils/GenerateQRCode'

const Form = () => {
    const qrCodeImageRef = useRef<HTMLImageElement>(null);

    const {
        chave,
        nome,
        setNome,
        cidade,
        setCidade,
        valor,
        setValor,
        identificador,
        setIdentificador,
        setQrCode,
        rawPix,
        setRawPix,
        colorQrCode,
        openTemplate,
        setOpenTemplate,
        setIsOpen
    } = useData();

    useEffect(() => {
        async function fetchDynamicPix() {
            const { qrCodeBase64, rawQrCode } = await generateDynamicPix(
                chave,
                nome,
                cidade,
                identificador,
                valor,
            );
            setQrCode(qrCodeBase64);
            setRawPix(rawQrCode);
        }

        void fetchDynamicPix();
    }, [chave, nome, cidade, identificador, valor]);

    const handleNumberValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const formattedValue = parseFloat(inputValue).toFixed(2);
        const numberValue = parseFloat(formattedValue);
        setValor(numberValue);
    };

    function handleModal() {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    function HandleDownloadQRCode() {
        downloadQRCode(qrCodeImageRef);
    }
    return (
        <>
            {!openTemplate &&
                <div className='w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded flex flex-wrap items-center shadow-lg bg-white'>
                    <div id='inputs' className='lg:w-4/6 w-full'>
                        <DropdownWithInput />
                        <TextInput
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setNome(e.target.value)
                            }
                            label='Nome do beneficiario*'
                            placeholder='Digite seu nome'
                            value={nome}
                        />
                        <TextInput
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setCidade(e.target.value)
                            }
                            label='Cidade do beneficiário ou da transação*'
                            placeholder='Digite sua cidade'
                            value={cidade}
                        />
                        <TextInput
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setIdentificador(e.target.value)
                            }
                            label='Código da transferência (opicional)'
                            placeholder='PGMTO123'
                            value={identificador === 'PGMTO123' ? '' : identificador}
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
                            mobile
                        />
                        <Button
                            label='Criar Placa Pix'
                            isDisabled={!chave || !nome || !cidade}
                            onClick={() => setOpenTemplate(true)}
                            background='bg-purple-600'
                            mobile
                        />
                    </div>
                    <div
                        className=' bg-white w-full lg:w-2/6 px-4 flex-col justify-center lg:flex hidden'
                    >
                        <div
                            className='w-ful flex justify-center items-center p-4 relative'
                        >
                            <div className='p-1' ref={qrCodeImageRef} id='QRcode'>
                                <QRCodeSVG
                                    value={rawPix}
                                    size={210}
                                    bgColor={'#ffffff'}
                                    fgColor={colorQrCode}
                                    level={'L'}
                                    includeMargin={false}
                                />

                            </div>

                        </div>

                        <div className='mt-2'>
                            <Accordion
                                title='Cor'
                                content={
                                    <div className='flex'>
                                        <ColorButton defaultChecked value='000000' />
                                        <ColorButton value='547896' />
                                        <ColorButton value='2FBCAD' />
                                        <ColorButton value='FF0060' />
                                        <ColorButton value='1D267D' />
                                    </div>
                                }
                            />
                        </div>
                        <Button
                            label='Download PNG'
                            onClick={HandleDownloadQRCode}
                            isDisabled={!chave || !nome || !cidade}
                        />
                        <Button
                            label='Criar Placa Pix'
                            isDisabled={!chave || !nome || !cidade}
                            onClick={() => setOpenTemplate(true)}
                            background='bg-purple-600'
                        />
                    </div>
                </div>}
        </>
    )
}

export default Form