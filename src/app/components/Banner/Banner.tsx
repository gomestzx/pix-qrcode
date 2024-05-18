import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <>
            <div className='w-full md:w-4/6 mx-auto mt-8 flex justify-center flex-wrap rounded-md' id='perguntas-frequentes'>
                <Link href='/placa-pix'>
                    <Image className=' rounded-md' src='/banner.png?v=' height={167} width={800} alt='' />
                </Link>
            </div >
        </>
    )
}

export default Banner