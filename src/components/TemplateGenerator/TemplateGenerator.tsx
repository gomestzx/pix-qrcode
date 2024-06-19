"use client";
import React, { useRef, useState } from "react";
import { Button } from "../ui/Button/Button";
import ColorButton from "../ui/ColorButton/ColorButton";
import Image from "next/image";
import { downloadQRCode } from "@/utils/DownloadQRCode";
import QRCode from "../QRCode/QRCode";
import { HiPlus } from "react-icons/hi";
import { ITemplateGenerator } from "./types";
import { FaArrowLeft } from "react-icons/fa6";
import { useQRCode } from "@/hooks/useQRCode";

const TemplateGenerator = ({ isVisible, callback }: ITemplateGenerator) => {
  const placaPixImageRef = useRef<HTMLImageElement>(null);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [imagemCarregada, setImagemCarregada] = useState<boolean>(false);

  const { qrcode, setQrCodeData } = useQRCode();

  if (!isVisible) return null;

  return (
    <>
      <div className="mt-4 w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded  shadow-lg bg-white">
        <button
          className="flex justify-center items-center mb-4 bg-gray-100 p-4 rounded-full"
          onClick={callback}
        >
          <FaArrowLeft style={{ marginRight: "8px" }} />
          <span>Voltar ao início</span>
        </button>

        <div className="flex flex-wrap items-start">
          <div className="lg:w-3/6 w-full flex items-center justify-center flex-wrap">
            <div className="relative" id="placa-pix" ref={placaPixImageRef}>
              <img
                src={`/templates/${qrcode.template}.png`}
                alt=""
                onLoad={() => setImagemCarregada(true)}
              />
              {imagemCarregada && (
                <>
                  <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center">
                    <QRCode value={qrcode.rawPix} color={qrcode.colorQrCode} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 mb-18 md:mb-28 lg:mb-14 xl:mb-20 md:text-xl lg:text-sm xl:text-lg text-base flex items-center justify-center">
                    <h3
                      style={{ wordBreak: "break-word" }}
                      className="max-w-[80%] text-center flex items-center justify-center break-words"
                    >
                      {qrcode.chave}
                    </h3>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className=" bg-white w-full lg:w-3/6 px-4 flex-col justify-center flex">
            <h3 className="mb-2 mt-4 lg:mt-0">Escolha o template</h3>
            <div className=" bg-gray-100 overflow-x-auto flex flex-wrap justify-center h-96 gap-2">
              <button
                className={`${
                  qrcode.template === "1"
                    ? "border-2 border-black rounded-sm"
                    : ""
                }`}
                onClick={() =>
                  setQrCodeData((prev) => ({ ...prev, template: "1" }))
                }
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
                  qrcode.template === "2"
                    ? "border-2 border-black rounded-sm"
                    : ""
                }`}
                onClick={() =>
                  setQrCodeData((prev) => ({ ...prev, template: "2" }))
                }
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
                  qrcode.template === "3"
                    ? "border-2 border-black rounded-sm"
                    : ""
                }`}
                onClick={() =>
                  setQrCodeData((prev) => ({ ...prev, template: "3" }))
                }
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
                  qrcode.template === "4"
                    ? "border-2 border-black rounded-sm"
                    : ""
                }`}
                onClick={() =>
                  setQrCodeData((prev) => ({ ...prev, template: "4" }))
                }
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
                  qrcode.template === "5"
                    ? "border-2 border-black rounded-sm"
                    : ""
                }`}
                onClick={() =>
                  setQrCodeData((prev) => ({ ...prev, template: "5" }))
                }
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
                  qrcode.template === "6"
                    ? "border-2 border-black rounded-sm"
                    : ""
                }`}
                onClick={() =>
                  setQrCodeData((prev) => ({ ...prev, template: "6" }))
                }
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
                  value={qrcode.colorQrCode}
                  onChange={(e) =>
                    setQrCodeData((prev) => ({
                      ...prev,
                      colorQrCode: e.target.value,
                    }))
                  }
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
            <Button
              background="bg-blue-600"
              label="Download Placa Pix"
              onClick={() => downloadQRCode(placaPixImageRef)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateGenerator;
