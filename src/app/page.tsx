'use client';
import { useEffect, useState } from 'react';
import { QrCodePix } from 'qrcode-pix';

function App(): JSX.Element {
  const [qrCode, setQrCode] = useState<string>('');
  const [rawPix, setRawPix] = useState<string>('');

  useEffect(() => {
    async function generateDynamicPix() {
      const qrCodePix = QrCodePix({
        version: '01',
        key: 'felipematheusdev@gmail.com',
        name: 'Test',
        city: 'SAO PAULO',
        transactionId: 'Test',
        message: 'Test',
        cep: '68750000',
        value: 15,
      });

      const rawPixStr = qrCodePix.payload();
      const qrCodeBase64 = await qrCodePix.base64();

      setRawPix(rawPixStr);
      setQrCode(qrCodeBase64);
    }

    void generateDynamicPix();
  }, []);

  return (
    <>
      <h1>QR Code pix</h1>
      <img src={qrCode} alt={'QR Code PIX'} />
      <p>{rawPix}</p>
    </>
  );
}

export default App;
