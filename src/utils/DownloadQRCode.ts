import html2canvas from 'html2canvas';

export function downloadQRCode(qrCodeImageRef: React.RefObject<HTMLImageElement>, type?: string) {
  if (qrCodeImageRef.current) {
    html2canvas(qrCodeImageRef.current).then((canvas) => {
      const image = canvas.toDataURL(`image/${type ?? 'png'}`);
      const link = document.createElement('a');
      link.href = image;
      link.download = 'qrcode-pix.png';
      link.click();
    });
  }
}