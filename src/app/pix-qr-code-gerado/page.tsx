"use client";
import { useQRCode } from "@/hooks/useQRCode";
import { QRCodeCanvas } from "qrcode.react";
import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import Title from "@/components/ui/Title/Title";

const QrCodeGeneratedPage = () => {
  const { qrcode } = useQRCode();
  const canvasRef = useRef(null);

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
      return () => clearInterval(intervalId);
    }
  }, []);

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
      <div className="relative z-10 flex justify-center items-center mt-5">
        <QRCodeCanvas
          value={qrcode.rawPix}
          size={210}
          bgColor={"#ffffff"}
          fgColor={qrcode.colorQrCode}
          level={"L"}
          includeMargin={false}
          imageSettings={{
            src: "",
            x: undefined,
            y: undefined,
            height: 40,
            width: 40,
            excavate: true,
          }}
        />
      </div>
      <canvas ref={canvasRef} className=" w-[400px] mt-[-200px]" />
      <button className=" text-center bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg w-full md:w-80 mt-4">Baixar PNG</button>
      <button className=" text-center bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg w-full md:w-80 mt-2">Baixar JPEG</button>
      <button className=" text-center bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg w-full md:w-80 mt-2">Criar placa PIX</button>
      <button className=" text-center bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg w-full md:w-80 mt-2">Gerar novo QR Code Pix</button>
    </div>
  );
};

export default QrCodeGeneratedPage;
