"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import Accordion from "../ui/Accordion/Accordion";
import { Button } from "../ui/Button/Button";
import ColorButton from "../ui/ColorButton/ColorButton";
import { useData } from "@/app/hooks/useData";
import Image from "next/image";
import { downloadQRCode } from "@/app/utils/DownloadQRCode";
import QRCode from "../QRCode/QRCode";
import DropdownWithInput from "../ui/DropdownWithInput/DropdownWithInput";
import TextInput from "../ui/TextInput/TextInput";
import { generateDynamicPix } from "@/app/utils/GenerateQRCode";
import NumberInput from "../ui/NumberInput/NumberInput";
import { HiPlus } from "react-icons/hi";

const PlateGenerator = () => {
  const placaPixImageRef = useRef<HTMLImageElement>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const {
    chave,
    nome,
    setNome,
    cidade,
    valor,
    qrCode,
    rawPix,
    colorQrCode,
    template,
    openTemplate,
    setOpenTemplate,
    setTemplate,
    modalIsOpen,
    setModalIsOpen,
    imagemCarregada,
    setImagemCarregada,
    identificador,
    setQrCode,
    setRawPix,
    setValor,
    setCidade,
    setIdentificador,
    setColorQrCode,
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

  return (
    <>
      <div className="mt-4 w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded  shadow-lg bg-white">
        <div className="flex flex-wrap items-start">
          <div className="lg:w-3/6 w-full flex items-center justify-center flex-wrap">
            <div className="relative" id="placa-pix" ref={placaPixImageRef}>
              <img
                src={`/templates/${template}.png`}
                alt=""
                onLoad={() => setImagemCarregada(true)}
              />
              <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center">
                <QRCode value={rawPix} color={colorQrCode} />
              </div>
              <div className="absolute inset-x-0 bottom-0 mb-18 md:mb-28 lg:mb-14 xl:mb-20 md:text-xl lg:text-sm xl:text-lg text-base flex items-center justify-center">
                <h3
                  style={{ wordBreak: "break-word" }}
                  className="max-w-[80%] text-center flex items-center justify-center break-words"
                >
                  {chave}
                </h3>
              </div>
            </div>
          </div>
          <div className=" bg-white w-full lg:w-3/6 px-4 flex-col justify-center flex mt-4">
            <h3 className="mb-2">Escolha o template</h3>
            <div className=" bg-gray-100 overflow-x-auto flex flex-wrap justify-center h-96 gap-2">
              <button
                className={`${
                  template === "1" ? "border-2 border-black rounded-sm" : ""
                }`}
                onClick={() => setTemplate("1")}
              >
                <Image
                  src="/previews/default.png"
                  width={150}
                  height={150}
                  alt=""
                />
              </button>
              <button
                className={`${
                  template === "2" ? "border-2 border-black rounded-sm" : ""
                }`}
                onClick={() => setTemplate("2")}
              >
                <Image
                  src="/previews/blue.png"
                  width={150}
                  height={150}
                  alt=""
                />
              </button>
              <button
                className={`${
                  template === "3" ? "border-2 border-black rounded-sm" : ""
                }`}
                onClick={() => setTemplate("3")}
              >
                <Image
                  src="/previews/logos.png"
                  width={150}
                  height={150}
                  alt=""
                />
              </button>
              <button
                className={`${
                  template === "4" ? "border-2 border-black rounded-sm" : ""
                }`}
                onClick={() => setTemplate("4")}
              >
                <Image
                  src="/previews/pink.png"
                  width={150}
                  height={150}
                  alt=""
                />
              </button>
              <button
                className={`${
                  template === "5" ? "border-2 border-black rounded-sm" : ""
                }`}
                onClick={() => setTemplate("5")}
              >
                <Image
                  src="/previews/pinkandblue.png"
                  width={150}
                  height={150}
                  alt=""
                />
              </button>
              <button
                className={`${
                  template === "6" ? "border-2 border-black rounded-sm" : ""
                }`}
                onClick={() => setTemplate("6")}
              >
                <Image
                  src="/previews/paper.png"
                  width={150}
                  height={150}
                  alt=""
                />
              </button>
            </div>
            <h3 className="mb-2 mt-4">Cor do QR Code</h3>
            <div className="mb-2 flex flex-wrap gap-2 justify-center items-center">
              <ColorButton defaultChecked value="000000" />
              <ColorButton value="2563EB" />
              <ColorButton value="2FBCAD" />
              <ColorButton value="FF0060" />
              <ColorButton value="FC4100" />
              <ColorButton value="FF76CE" />

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
        </div>

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
        <TextInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setIdentificador(e.target.value)
          }
          label="Código da transferência (opicional)"
          placeholder="PGMTO123"
          value={identificador === "PGMTO123" ? "" : identificador}
        />
        <NumberInput
          onChange={handleNumberValue}
          value={valor === 0 ? undefined : valor}
          label="Valor (opcional)"
          placeholder="Digite o valor"
        />
        <Button
          label="Download Placa Pix"
          onClick={() => downloadQRCode(placaPixImageRef)}
          isDisabled={!chave || !nome || !cidade}
        />
      </div>
      <ModalComponent
        closeModal={() => setModalIsOpen((prev) => !prev)}
        valor={valor ?? 0}
        nome={nome}
        cidade={cidade}
        chave={chave}
        qrCode={qrCode}
        isOpen={modalIsOpen}
      />
    </>
  );
};

export default PlateGenerator;
