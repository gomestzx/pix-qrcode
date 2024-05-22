import React, { ChangeEvent, useState } from "react";
import { maskPhone, unmask, maskCPF, maskCNPJ } from "@/utils/inputMask";
import { useQRCode } from "@/hooks/useQRCode";
import TextInput from "../TextInput/TextInput";


interface DropdownWithInputProps {}

const DropdownWithInput: React.FC<DropdownWithInputProps> = () => {
  const [selectedOption, setSelectedOption] = useState("Telefone");

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setQrCodeData((prev) => ({ ...prev, chave: "" }));
  };

  const { qrcode, setQrCodeData } = useQRCode();

  const optionsMap: { [key: string]: JSX.Element } = {
    Telefone: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQrCodeData((prev) => ({ ...prev, chave: unmask(e.target.value) }))
        }
        placeholder="Digite seu telefone"
        value={maskPhone(qrcode.chave)}
        maxLength={15}
      />
    ),
    Email: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQrCodeData((prev) => ({ ...prev, chave: e.target.value }))
        }
        placeholder="Digite seu email"
        value={qrcode.chave}
      />
    ),
    CPF: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQrCodeData((prev) => ({ ...prev, chave: e.target.value }))
        }
        placeholder="Digite seu CPF"
        value={maskCPF(qrcode.chave)}
        maxLength={14}
      />
    ),
    CNPJ: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQrCodeData((prev) => ({ ...prev, chave: unmask(e.target.value) }))
        }
        value={maskCNPJ(qrcode.chave)}
        placeholder="Digite seu CNPJ"
        maxLength={18}
      />
    ),
    Outro: (
      <TextInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQrCodeData((prev) => ({ ...prev, chave: e.target.value }))
        }
        placeholder="Digite sua chave"
        value={qrcode.chave}
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
    </>
  );
};

export default DropdownWithInput;
