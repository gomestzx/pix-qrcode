export {};

declare global {
  interface IQrCode {
    chave: string;
    cidade: string;
    nome: string;
    valor: number;
    identificador: string;
    mensagem: string;
    qrCode: string;
    rawPix: string;
    colorQrCode: string;
    template: string;
  }
}
