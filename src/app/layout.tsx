import { DataProvider } from '../context/DataContext'
import './globals.css'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QR Code Pix e Placa Personalizada | Pix QR Code',
  description: 'Crie seu QR Code Pix e Placa Personalizada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="WqHTkzhivweFQ5xC1QkGB6WMtfWnD-6528idvU6J7dk" />
        <meta name="google-adsense-account" content="ca-pub-2529229033686497" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2529229033686497"
          crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  )
}
