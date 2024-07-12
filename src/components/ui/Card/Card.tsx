import Image from "next/image";
import React from "react";
import { ICardProps } from "./types";

const Card = (props: ICardProps) => {
  return (
    <div className="flex justify-center items-center flex-col p-4 md:p-0">
      <Image src={props.img} alt="img" width={200} height={200} />
      <h2 className="text-center font-darkerGrotesque text-2xl font-bold">{props.titulo}</h2>
      <p className="text-base text-center w-52">{props.conteudo}</p>
    </div>
  );
};

export default Card;
