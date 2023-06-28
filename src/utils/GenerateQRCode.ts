import { QrCodePix } from 'qrcode-pix';

export async function generateDynamicPix(
  chave: string,
  nome: string,
  cidade: string,
  identificador: string,
  valor?: number
): Promise<{ qrCodeBase64: string, rawQrCode: string }> {
  const qrCodePix = QrCodePix({
    version: '01',
    key: chave,
    name: nome,
    city: cidade,
    transactionId: identificador,
    value: valor ?? 0,
  });

  const qrCodeBase64 = await qrCodePix.base64();
  const rawQrCode = qrCodePix.payload();

  return {
    qrCodeBase64,
    rawQrCode
  };
}