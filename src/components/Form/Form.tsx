"use client";
import { useRouter } from "next/navigation";

import { QRCodeCanvas } from "qrcode.react";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button/Button";
import ColorButton from "../ui/ColorButton/ColorButton";
import DropdownWithInput from "../ui/DropdownWithInput/DropdownWithInput";
import NumberInput from "../ui/NumberInput/NumberInput";
import TextInput from "../ui/TextInput/TextInput";
import { downloadQRCode } from "@/utils/DownloadQRCode";
import { generateDynamicPix } from "@/utils/GenerateQRCode";
import { FaFileImage } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import { IForm } from "./types";
import ModalComponent from "../ModalComponent/ModalComponent";
import { useQRCode } from "@/hooks/useQRCode";
import { MdDownload, MdImage, MdQrCodeScanner } from "react-icons/md";


const Form = ({ isVisible, callback }: IForm) => {
  const qrCodeImageRef = useRef<HTMLImageElement>(null);
  
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [nomeInputError, setNomeInputError] = useState<boolean>(false);
  const [chaveInputError, setChaveInputError] = useState<boolean>(false);
  const [cidadeInputError, setCidadeInputError] = useState<boolean>(false);


  const { qrcode, setQrCodeData, logoUrl, setLogoUrl } = useQRCode();
  const router = useRouter();

  useEffect(() => {
    async function fetchDynamicPix() {
      const { qrCodeBase64, rawQrCode } = await generateDynamicPix(
        qrcode.chave,
        qrcode.nome,
        qrcode.cidade,
        qrcode.identificador,
        qrcode.valor,
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
  ]);

  const handleNumberValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = parseFloat(inputValue).toFixed(2);
    const numberValue = parseFloat(formattedValue);
    setQrCodeData((prevQrCode) => ({
      ...prevQrCode,
      valor: numberValue,
    }));
  };

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoUrl(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded flex flex-wrap items-center shadow-lg bg-white">
        <div id="inputs" className="lg:w-4/6 w-full">
          <DropdownWithInput error={chaveInputError} callback={() => setChaveInputError(false)} />
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setQrCodeData((prevQrCode) => ({
                ...prevQrCode,
                nome: e.target.value,
              }));
              setNomeInputError(false);
            }
            }

            label="Nome do beneficiario*"
            placeholder="Digite seu nome"
            value={qrcode.nome}
            error={nomeInputError}
            errorLabel="Digite um nome válido"
          />
          <TextInput
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setQrCodeData((prevQrCode) => ({
                ...prevQrCode,
                cidade: e.target.value,
              }));
              setCidadeInputError(false);
            }
            }
            label="Cidade do beneficiário ou da transação*"
            placeholder="Digite sua cidade"
            value={qrcode.cidade}
            error={cidadeInputError}
            errorLabel="Digite uma cidade válida"
          />
          <NumberInput
            onChange={handleNumberValue}
            value={qrcode.valor === 0 ? undefined : qrcode.valor}
            label="Valor (opcional)"
            placeholder="Digite o valor"
          />
          <TextInput

            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQrCodeData((prevQrCode) => ({
                ...prevQrCode,
                identificador: e.target.value,
              }))
            }
            label="Código da transferência (opicional)"
            placeholder="PGMTO123"
            value={
              qrcode.identificador === "PGMTO123" ? "" : qrcode.identificador
            }
          />
          <Button
            label="Gerar QR Code"
            onClick={() => {
              if (qrcode.chave === 'semchave' || !qrcode.chave) {
                setChaveInputError(true);
              }
              if (!qrcode.nome) {
                setNomeInputError(true);
              }
              if (!qrcode.cidade) {
                setCidadeInputError(true);
              }
              if (qrcode.chave && qrcode.chave !== 'semchave' && qrcode.nome && qrcode.cidade) {
                setIsModalOpen((prev) => !prev)
              }

            }}
            mobile

          />
          <Button
            label="Criar Placa Pix"
            onClick={() => {
              if (!qrcode.chave || qrcode.chave === 'semchave') {
                setChaveInputError(true);
              }
              if (!qrcode.nome) {
                setNomeInputError(true);
              }
              if (!qrcode.cidade) {
                setCidadeInputError(true);
              }
              if (qrcode.chave && qrcode.nome && qrcode.cidade) {
                callback()
              }

            }}
            mobile
          />
        </div>
        <div className=" bg-white w-full lg:w-2/6 px-4 flex-col justify-center lg:flex hidden">
          <div className=" flex justify-end">
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              id="fileInput"
              className="hidden"
            />
            <label htmlFor="fileInput">
              <span className="flex justify-center items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 text-sm">
                <FaFileImage />
                Upload Logo
              </span>
            </label>
          </div>
          <div className="w-ful flex justify-center items-center p-2 relative">
            <div className="p-1" ref={qrCodeImageRef} id="QRcode">
              <QRCodeCanvas
                value={qrcode.rawPix}
                size={210}
                bgColor={"#ffffff"}
                fgColor={qrcode.colorQrCode}
                level={"L"}
                includeMargin={false}
                imageSettings={{
                  src: logoUrl ?? "",
                  x: undefined,
                  y: undefined,
                  height: 40,
                  width: 40,
                  excavate: true,
                }}
              />
            </div>
          </div>

          <div className="mx-2">
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <ColorButton defaultChecked value="000000" />
              <ColorButton value="2563EB" />
              <ColorButton value="2FBCAD" />
              <ColorButton value="FF0060" />
              <div className="relative inline-block">
                <input
                  type="color"
                  id="colorPicker"
                  value={qrcode.colorQrCode}
                  onChange={(e) =>
                    setQrCodeData((prevQrCode) => ({
                      ...prevQrCode,
                      colorQrCode: e.target.value,
                    }))
                  }
                  className={`absolute opacity-0 ${showColorPicker ? "block" : "hidden"
                    }`}
                  style={{ zIndex: 10 }}
                  onBlur={() => setShowColorPicker(false)}
                />
                <label htmlFor="colorPicker">
                  <span
                    className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer"
                    onClick={() => setShowColorPicker(!showColorPicker)}
                  >
                    <HiPlus />
                  </span>
                </label>
              </div>
            </div>
          </div>
          <Button
            label={<div className=" flex gap-2 justify-center items-center">Gerar QR Code<MdDownload /></div>}
            onClick={() => {
              if (!qrcode.chave || qrcode.chave === 'semchave') {
                setChaveInputError(true);
              }
              if (!qrcode.nome) {
                setNomeInputError(true);
              }
              if (!qrcode.cidade) {
                setCidadeInputError(true);
              }
              if (qrcode.chave && qrcode.chave !== 'semchave' && qrcode.nome && qrcode.cidade) {
                // downloadQRCode(qrCodeImageRef)
                router.push('pix-qr-code-gerado')
              }
            }
            }

          />
          <Button
            label={<div className=" flex gap-2 justify-center items-center">Criar Placa Pix<MdImage /></div>}
            onClick={() => {
              if (!qrcode.chave || qrcode.chave === 'semchave') {
                setChaveInputError(true);
              }
              if (!qrcode.nome) {
                setNomeInputError(true);
              }
              if (!qrcode.cidade) {
                setCidadeInputError(true);
              }
              if (qrcode.chave && qrcode.nome && qrcode.cidade) {
                callback()
              }
            }
            }
            customClass="bg-black"

          />
        </div>
      </div>
      <ModalComponent
        closeModal={() => setIsModalOpen((prev) => !prev)}
        valor={qrcode.valor ?? 0}
        nome={qrcode.nome}
        cidade={qrcode.cidade}
        chave={qrcode.chave}
        qrCode={qrcode.qrCode}
        isOpen={isModalOpen}
      />
    </>
  );
};

export default Form;
