export interface INumberInput {
    label?: string;
    onChange(e: any): void;
    value?: number;
    placeholder?: string;
    required?: boolean;
  }