"use client";
import { useData } from "@/app/hooks/useData";
import React from "react";
import { ITitle } from "./types";

const Title = (props: ITitle) => {
  const { openTemplate } = useData();
  return (
    <>
      {!openTemplate && (
        <div
          className={`${props.customClassName} p-2 flex flex-col justify-center items-center font-PoppinsMedium `}
         
        >
          <h1 className="text-4xl lg:text-5xl text-teal-500 text-center font-black ">
            {props.title}
          </h1>
          <p className="text-center text-bold text-gray-600 font-PoppinsMedium w-auto md:w-2/4 mt-2 font-semibold">
            {props.description}
          </p>
        </div>
      )}
    </>
  );
};

export default Title;
