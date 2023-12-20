import { DataProvider } from './context/DataContext'
import './globals.css'
import { Open_Sans, Roboto_Mono, Montserrat } from "next/font/google";
import 'tailwindcss/tailwind.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Gerar QR Code Pix e Placa Personalizada',
  description: 'O Pix QR Code é uma ferramenta online que gera QR Codes e placas personalizadas que facilitam o recebimento de pagamentos no sistema Pix.',
  keywords: ['QR Code PIX', 'Placa PIX', 'QR Code pix', 'Chave PIX QR Code', 'Criar QR Code pix'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pix-qr-code.com.br" />
        <meta property="og:image" content="https://www.pix-qr-code.com.br/pix.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="511" />
        <meta property="og:image:alt" content="Gerar QRCode PIX" />
        <meta name="google-site-verification" content="WqHTkzhivweFQ5xC1QkGB6WMtfWnD-6528idvU6J7dk" />
        <meta name="google-adsense-account" content="ca-pub-2529229033686497" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2529229033686497"
          crossOrigin="anonymous"></script>
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  )
}
