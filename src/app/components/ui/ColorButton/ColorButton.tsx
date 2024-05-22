import React from "react";
import { IColorButtonProps } from "./types";
import { useQRCode } from "@/app/hooks/useQRCode";

const ColorButton = (props: IColorButtonProps) => {
  const {setQrCodeData} = useQRCode()
  return (
    <button
      type="button"
      value={props.value}
      name="colorInput"
      onClick={() => setQrCodeData((prev) => ({...prev, colorQrCode: `#${props.value}`}))}
      defaultChecked={props.defaultChecked}
      className={`p-3 w-8 h-8 rounded-full`}
      style={{ backgroundColor: `#${props.value}` }}
    />
  );
};

export default ColorButton;
