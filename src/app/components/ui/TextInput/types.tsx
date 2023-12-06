import { ChangeEvent } from "react";

export interface ITextInput {
  label?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  value?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
}
