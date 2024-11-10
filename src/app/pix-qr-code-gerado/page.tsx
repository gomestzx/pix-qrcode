"use client";
import { useQRCode } from "@/hooks/useQRCode";
import { QRCodeCanvas } from "qrcode.react";
import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import Title from "@/components/ui/Title/Title";
import { generateDynamicPix } from "@/utils/GenerateQRCode";
import { downloadQRCode } from "@/utils/DownloadQRCode";
import { useRouter } from "next/navigation";
import { FaKey } from "react-icons/fa6";

const QrCodeGeneratedPage = () => {
  const canvasRef = useRef(null);
  const qrCodeImageRef = useRef<HTMLImageElement>(null);
  const router = useRouter();

  const [confettiInterval, setConfettiInterval] = useState<NodeJS.Timeout | null>(null);

  const { qrcode, setQrCodeData, logoUrl } = useQRCode();

  useEffect(() => {
    async function fetchDynamicPix() {
      const { qrCodeBase64, rawQrCode } = await generateDynamicPix(
        qrcode.chave,
        qrcode.nome,
        qrcode.cidade,
        qrcode.identificador,
        qrcode.valor
      );
      setQrCodeData((prevQrCode) => ({
        ...prevQrCode,
        qrCode: qrCodeBase64,
        rawPix: rawQrCode,
      }));
    }

    void fetchDynamicPix();
  }, [
    qrcode.chave,
    qrcode.nome,
    qrcode.cidade,
    qrcode.identificador,
    qrcode.valor,
    setQrCodeData,
  ]);

  useEffect(() => {
    if (canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });

      const launchConfetti = () => {
        myConfetti({
          particleCount: 300,
          spread: 200,
          origin: { y: 0.6 },
        });
      };

      const intervalId = setInterval(launchConfetti, 2000);
      setConfettiInterval(intervalId);

      return () => clearInterval(intervalId);
    }
  }, []);

  const handleDownloadPNG = (type?: string) => {
    if (confettiInterval) clearInterval(confettiInterval);

    downloadQRCode(qrCodeImageRef, type ?? '');

    setTimeout(() => {
      if (canvasRef.current) {
        const myConfetti = confetti.create(canvasRef.current, {
          resize: true,
          useWorker: true,
        });
        const launchConfetti = () => {
          myConfetti({
            particleCount: 300,
            spread: 200,
            origin: { y: 0.6 },
          });
        };
        const intervalId = setInterval(launchConfetti, 2000);
        setConfettiInterval(intervalId);
      }
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-2 relative">
      <Title
        title={
          <>
            Seu QR Code foi <br />
            <span className="relative whitespace-nowrap ">
              <span className="relative">Gerado com</span>
            </span>{" "}
            <span className=" text-teal-500">sucesso</span>
          </>
        }
        description={
          <>
            Agora você pode baixá-lo em PNG ou JPEG para usar como quiser. Que
            tal dar um passo a mais? Crie uma placa exclusiva com seu QR Code
            Pix e facilite ainda mais seus recebimentos. Personalize e
            compartilhe sua chave Pix com estilo e praticidade!
          </>
        }
      />
      <div
        ref={qrCodeImageRef}
        id="QRcode"
        className="relative z-10 flex justify-center items-center p-2"
      >
        <QRCodeCanvas
          value={qrcode.rawPix}
          size={210}
          bgColor={"#ffffff"}
          fgColor={qrcode.colorQrCode}
          level={"L"}
          includeMargin={false}
          imageSettings={{
            src: logoUrl || "", 
            height: 40, 
            width: 40,
            excavate: true,
          }}
        />
      </div>
      <canvas ref={canvasRef} className=" w-[400px] mt-[-200px]" />
      <h3 className=" bg-blue-200 px-6 py-2 rounded-lg font-medium flex justify-center items-center">
        <FaKey className="mr-2" /> chave: {qrcode.chave}
      </h3>
      <button
        onClick={() => handleDownloadPNG()}
        className=" text-center bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg w-[90%] md:w-80 mt-4 font-medium "
      >
        Baixar PNG
      </button>
      <button onClick={() => handleDownloadPNG('jpeg')} className=" text-center bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg w-[90%] md:w-80 mt-2 font-medium">
        Baixar JPEG
      </button>
      <button onClick={() => router.push('placa-pix')} className=" text-center bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg w-[90%] md:w-80 mt-2 font-medium">
        Criar placa PIX
      </button>
      <button onClick={() => router.push('/')} className=" text-center bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg w-[90%] md:w-80 mt-2 font-medium">
        Gerar novo QR Code Pix
      </button>
    </div>
  );
};

export default QrCodeGeneratedPage;
