export interface IModalComponentProps {
  isOpen: boolean;
  qrCode: string;
  chave: string;
  nome: string;
  cidade: string;
  valor?: number;
  closeModal: () => void;
}
