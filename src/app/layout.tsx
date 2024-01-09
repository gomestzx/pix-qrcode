import { DataProvider } from './context/DataContext'
import './globals.css'
import { Montserrat } from "next/font/google";
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
      <body className={`${montserrat.variable} font-sans`}>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  )
}
