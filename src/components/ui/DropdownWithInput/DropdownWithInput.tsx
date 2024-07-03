import React, { ChangeEvent, useState } from "react";
import { maskPhone, unmask, maskCPF, maskCNPJ } from "@/utils/inputMask";
import { useQRCode } from "@/hooks/useQRCode";
import TextInput from "../TextInput/TextInput";

interface DropdownWithInputProps {

  error?: boolean;
  callback?: () => void;
}



const DropdownWithInput: React.FC<DropdownWithInputProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState("Telefone");

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setQrCodeData((prev) => ({ ...prev, chave: "" }));
  };

  const { qrcode, setQrCodeData } = useQRCode();

  const optionsMap: { [key: string]: JSX.Element } = {
    Telefone: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQrCodeData((prev) => ({ ...prev, chave: unmask(e.target.value) }));
          if (props.callback) {
            props.callback();
          }
        }
        }
        placeholder="Digite seu telefone"
        value={maskPhone(qrcode.chave)}
        maxLength={15}
        error={props.error} />
    ),
    Email: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQrCodeData((prev) => ({ ...prev, chave: e.target.value }));
          if (props.callback) {
            props.callback();
          }
        }
        }
        placeholder="Digite seu email"
        value={qrcode.chave}
        error={props.error}

      />
    ),
    CPF: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQrCodeData((prev) => ({ ...prev, chave: e.target.value }));
          if (props.callback) {
            props.callback();
          }
        }}
        placeholder="Digite seu CPF"
        value={maskCPF(qrcode.chave)}
        maxLength={14}
        error={props.error}

      />
    ),
    CNPJ: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQrCodeData((prev) => ({ ...prev, chave: unmask(e.target.value) }));
          if (props.callback) {
            props.callback();
          }
        }}
        value={maskCNPJ(qrcode.chave)}
        placeholder="Digite seu CNPJ"
        maxLength={18}
        error={props.error}

      />
    ),
    Outro: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQrCodeData((prev) => ({ ...prev, chave: e.target.value }));
          if (props.callback) {
            props.callback();
          }
        }}
        placeholder="Digite sua chave"
        value={qrcode.chave}
        error={props.error}

      />
    ),
  };

  const componenteRenderizado = optionsMap[selectedOption] || null;

  return (
    <>
      <div className="w-full block mb-2 text-md text-gray-600 font-medium">
        Chave PIX*
      </div>
      <div className="w-full flex items-center justify-center">
        <select
          className="mr-2 py-2 mb-3 text-md text-gray-600 bg-white focus:outline-none focus:ring-0 cursor-pointer font-medium"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {Object.keys(optionsMap).map((option) => (
            <option key={option} value={option} className="bg-red-500 px-6">
              {option}
            </option>
          ))}
        </select>

        {componenteRenderizado}
      </div>
      {
        props.error && <p className=" text-red-400 font-redHat font-extralight">Digite uma chave válida</p>
      }
    </>
  );
};

export default DropdownWithInput;
