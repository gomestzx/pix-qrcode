import { DataProvider } from './context/DataContext'
import './globals.css'
import { DM_Sans, Montserrat, Mulish, Open_Sans, Poppins, Roboto_Mono } from "next/font/google";
import 'tailwindcss/tailwind.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Adicione todos os pesos
  variable: '--font-poppins',
});

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'], 
  variable: '--font-mulish',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'], 
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Gerar QR Code Pix e Placa Personalizada',
  description: 'O Pix QR Code é uma ferramenta online que gera QR Codes e placas personalizadas que facilitam o recebimento de pagamentos no sistema Pix.',
  keywords: ['QR Code PIX', 'Placa PIX', 'QR Code pix', 'Chave PIX QR Code', 'Criar QR Code pix'],
  openGraph: {
    title: 'Gerar QRCode PIX',
    url: 'https://www.pix-qr-code.com.br'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google-site-verification" content="WqHTkzhivweFQ5xC1QkGB6WMtfWnD-6528idvU6J7dk" />
        <meta name="google-adsense-account" content="ca-pub-2529229033686497" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2529229033686497"
          crossOrigin="anonymous"></script>
      </head>
      <body className={`${openSans.variable} ${poppins.variable} ${mulish.variable} ${dmSans.variable} font-mulish`}>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  )
}
