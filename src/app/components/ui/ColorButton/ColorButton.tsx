import { useData } from "@/app/hooks/useData";
import React from "react";
import { IColorButtonProps } from "./types";

const ColorButton = (props: IColorButtonProps) => {
  const { colorQrCode, setColorQrCode } = useData();
  return (
    <button
      type="button"
      value={props.value}
      name="colorInput"
      onClick={() => setColorQrCode(`#${props.value}`)}
      defaultChecked={props.defaultChecked}
      className={`p-3 w-8 h-8 rounded-full`}
      style={{ backgroundColor: `#${props.value}` }}
    />
  );
};

export default ColorButton;
