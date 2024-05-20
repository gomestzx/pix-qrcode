"use client";
import { QRCodeCanvas } from "qrcode.react";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button/Button";
import ColorButton from "../ui/ColorButton/ColorButton";
import DropdownWithInput from "../ui/DropdownWithInput/DropdownWithInput";
import NumberInput from "../ui/NumberInput/NumberInput";
import TextInput from "../ui/TextInput/TextInput";
import { useData } from "@/app/hooks/useData";
import { downloadQRCode } from "@/app/utils/DownloadQRCode";
import { generateDynamicPix } from "@/app/utils/GenerateQRCode";
import { FaFileImage, FaPlus } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";

const Form = () => {
  const qrCodeImageRef = useRef<HTMLImageElement>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const {
    chave,
    nome,
    setNome,
    cidade,
    setCidade,
    valor,
    setValor,
    identificador,
    setIdentificador,
    setQrCode,
    rawPix,
    setRawPix,
    colorQrCode,
    setColorQrCode,
    openTemplate,
    setOpenTemplate,
    setModalIsOpen,
  } = useData();

  useEffect(() => {
    async function fetchDynamicPix() {
      const { qrCodeBase64, rawQrCode } = await generateDynamicPix(
        chave,
        nome,
        cidade,
        identificador,
        valor
      );
      setQrCode(qrCodeBase64);
      setRawPix(rawQrCode);
    }

    void fetchDynamicPix();
  }, [chave, nome, cidade, identificador, valor]);

  const handleNumberValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = parseFloat(inputValue).toFixed(2);
    const numberValue = parseFloat(formattedValue);
    setValor(numberValue);
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

  return (
    <>
      {!openTemplate && (
        <div className="w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded flex flex-wrap items-center shadow-lg bg-white">
          <div id="inputs" className="lg:w-4/6 w-full">
            <DropdownWithInput />
            <TextInput
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNome(e.target.value)
              }
              label="Nome do beneficiario*"
              placeholder="Digite seu nome"
              value={nome}
            />
            <TextInput
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCidade(e.target.value)
              }
              label="Cidade do beneficiário ou da transação*"
              placeholder="Digite sua cidade"
              value={cidade}
            />
            <NumberInput
              onChange={handleNumberValue}
              value={valor === 0 ? undefined : valor}
              label="Valor (opcional)"
              placeholder="Digite o valor"
            />
            <TextInput
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setIdentificador(e.target.value)
              }
              label="Código da transferência (opicional)"
              placeholder="PGMTO123"
              value={identificador === "PGMTO123" ? "" : identificador}
            />
            <Button
              label="Gerar QR Code"
              onClick={() => setModalIsOpen((prev) => !prev)}
              isDisabled={!chave || !nome || !cidade}
              mobile
            />
            <Button
              label="Criar Placa Pix"
              isDisabled={!chave || !nome || !cidade}
              onClick={() => setOpenTemplate(true)}
              background="bg-purple-600"
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
                  value={rawPix}
                  size={210}
                  bgColor={"#ffffff"}
                  fgColor={colorQrCode}
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
                    value={colorQrCode}
                    onChange={(e) => setColorQrCode(e.target.value)}
                    className={`absolute opacity-0 ${
                      showColorPicker ? "block" : "hidden"
                    }`}
                    style={{ zIndex: 10 }}
                    onBlur={() => setShowColorPicker(false)} // Hide on blur
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
              label="Download PNG"
              onClick={() => downloadQRCode(qrCodeImageRef)}
              isDisabled={!chave || !nome || !cidade}
            />
            <Button
              label="Criar Placa Pix"
              isDisabled={!chave || !nome || !cidade}
              onClick={() => setOpenTemplate(true)}
              background="bg-blue-600"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
