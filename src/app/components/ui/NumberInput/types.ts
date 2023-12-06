import { ChangeEvent } from 'react';

export interface INumberInput {
  label?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  value?: number;
  placeholder?: string;
  required?: boolean;
}
