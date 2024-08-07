import Navbar from "@/components/Navbar/Navbar";
import { QRCodeProvider } from "../context/QRCodeContext";
import "./globals.css";
import { Mulish, Darker_Grotesque, Nunito_Sans, Red_Hat_Display, Open_Sans } from "next/font/google";
import "tailwindcss/tailwind.css";
import Footer from "@/components/Footer/Footer";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
});

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-darker-grotesque",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-red-hat-display",
});

const sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Gerar QR Code Pix e Placa Personalizada",
  description:
    "O Pix QR Code é uma ferramenta online que gera QR Codes e placas personalizadas que facilitam o recebimento de pagamentos no sistema Pix.",
  keywords: [
    "QR Code PIX",
    "Placa PIX",
    "QR Code pix",
    "Chave PIX QR Code",
    "Criar QR Code pix",
  ],
  openGraph: {
    title: "Gerar QRCode PIX",
    url: "https://www.pix-qr-code.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="google-site-verification"
          content="WqHTkzhivweFQ5xC1QkGB6WMtfWnD-6528idvU6J7dk"
        />
        <meta name="google-adsense-account" content="ca-pub-2529229033686497" />
        <script
          type="text/javascript"
          src="https://player.viads.com/tag/load-107836.js"
          async
          charSet="UTF-8"
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2529229033686497"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${mulish.variable} ${darkerGrotesque.variable} ${nunito.variable} ${redHatDisplay.variable} ${sans.variable} font-redHat`}>
        <QRCodeProvider>
          <Navbar />
          {children}
          <Footer />
        </QRCodeProvider>
      </body>
    </html>
  );
}
