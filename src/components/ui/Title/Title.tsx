"use client";
import React from "react";
import { ITitle } from "./types";

const Title = (props: ITitle) => {
  return (
    <>
      <div
        className={`${props.customClassName} p-2 flex flex-col justify-center items-center  `}
      >
        <h1 className="text-4xl lg:text-5xl text-teal-500 text-center font-black font-mulish">
          {props.title}
        </h1>
        <p className="text-center text-bold  font-PoppinsMedium w-auto md:w-[55%] mt-2 font-nunito text-lg">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default Title;
