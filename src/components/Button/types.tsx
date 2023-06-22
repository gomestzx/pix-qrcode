import { MouseEventHandler } from "react";

export interface IButtonProps {
    label: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
}