import React from "react";
import { IButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Button = (props: IButtonProps) => {
  return (
    <button
      className={twMerge(
        `${props.mobile ? "block lg:hidden" : "block"} w-full rounded p-3 mt-2  bg-blue-600 text-bold disabled:opacity-50 disabled:bg-zinc-600 font-redHat text-white`,
        props.customClass
      )}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.label}
    </button>
  );
};
