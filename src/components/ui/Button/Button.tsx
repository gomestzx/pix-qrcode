import React from "react";
import { IButtonProps } from "./types";

export const Button = (props: IButtonProps) => {
  return (
    <button
      className={`${
        props.mobile ? "block lg:hidden" : "block"
      } w-full rounded p-3 mt-2 text-white ${
        props.background ?? "bg-teal-500"
      } text-bold disabled:opacity-50 disabled:bg-zinc-600 font-dmSan`}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.label}
    </button>
  );
};
