import React, { ChangeEvent, useRef, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { downloadQRCode } from "@/app/utils/DownloadQRCode";
import { IModalComponentProps } from "./types";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { useData } from "@/app/hooks/useData";
import Accordion from "../ui/Accordion/Accordion";
import ColorButton from "../ui/ColorButton/ColorButton";
import { HiPlus } from "react-icons/hi";
import { FaFileImage, FaXmark } from "react-icons/fa6";
import Link from "next/link";

const ModalComponent = (props: IModalComponentProps) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const qrCodeImageRef = useRef<HTMLImageElement>(null);

  function HandleDownloadQRCode() {
    downloadQRCode(qrCodeImageRef);
  }

  const { colorQrCode, rawPix, setColorQrCode } = useData();

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
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
        className="fixed inset-0 flex items-center justify-center"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div className="bg-white p-6 rounded-lg max-w-md w-full md:max-w-screen-md md:w-auto">
          <button
            onClick={props.closeModal}
            className="text-right text-2xl w-full flex justify-end"
          >
            <FaXmark />
          </button>
          <div className=" flex justify-end mt-6">
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
          <div
            id="qrCode"
            className="flex items-center justify-center relative p-4 "
          >
            <QRCodeCanvas
              value={rawPix}
              size={190}
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

          <div className=" flex flex-col gap-2">
            <button
              className="w-full rounded p-3 text-white font-normal bg-teal-500 mt-4"
              onClick={HandleDownloadQRCode}
            >
              Baixar QR CODE
            </button>
            <Link
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded text-white font-dmSans text-center"
              href="/placa-pix"
              onClick={props.closeModal}
            >
              Gerar placa personalizada
            </Link>
          </div>

          <div className="flex items-start justify-center flex-col mt-4 w-full md:w-9/12">
            <p className="w-full">
              <span className="font-semibold">Chave:</span> {props.chave}
            </p>
            <p className="w-full">
              <span className="font-semibold">Nome:</span> {props.nome}
            </p>
            <p className="w-full">
              <span className="font-semibold">Cidade:</span> {props.cidade}
            </p>
            {props.valor ? (
              <p className="w-full">
                <span className="font-semibold">Valor:</span> {props.valor}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
