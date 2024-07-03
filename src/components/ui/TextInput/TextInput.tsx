import React from "react";
import { ITextInput } from "./types";

const TextInput = ({ label, error, errorLabel, ...inputProps }: ITextInput) => {
  return (
    <>
      {label && (
        <div className="w-full block mb-2 text-md text-gray-600 font-medium">
          {label}
        </div>
      )}
      <input
        {...inputProps}
        className={`${error ? 'border-red-300' : 'border-gray-300'} w-full border-2 rounded py-2 px-3 text-gray-500 focus:border-blue-500 focus:outline-none mb-3`}
        type="text"
      />
      {error && <p className="text-red-400 font-redHat font-extralight">{errorLabel}</p>}
    </>
  );
};

export default TextInput;
