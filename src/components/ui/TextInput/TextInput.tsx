import React from "react";
import { ITextInput } from "./types";

const TextInput = (props: ITextInput) => {
  return (
    <>
      {props.label && (
        <div className="w-full block mb-2 text-md text-gray-600 font-medium">
          {props.label}
        </div>
      )}
      <input
        {...props}
        className="w-full border-gray-300 border-2 rounded py-2 px-3 text-gray-500 focus:border-blue-500 focus:outline-none mb-3"
        type="text"
        onChange={props.onChange}
      />
    </>
  );
};

export default TextInput;
