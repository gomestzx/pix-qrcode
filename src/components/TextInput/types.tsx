export interface ITextInput {
  label?: string;
  onChange(e: any): void;
  value?: number;
  placeholder?: string;
  required?: boolean;
}
