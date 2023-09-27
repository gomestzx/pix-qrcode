import { DataProvider } from '../context/DataContext'
import './globals.css'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerar QR Code e Placa PIX',
  description: 'Crie seu QR Code e Placa PIX 100% grátis',
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
      </head>
      <body className={inter.className}>
      <DataProvider>  
        {children}
      </DataProvider>
      </body>
    </html>
  )
}
