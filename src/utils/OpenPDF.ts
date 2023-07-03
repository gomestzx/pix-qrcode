import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export function openPDF(qrCodeImageRef: React.RefObject<HTMLImageElement>, chave: string, nome: string) {
  if (qrCodeImageRef.current) {
    html2canvas(qrCodeImageRef.current).then((canvas) => {
      const image = canvas.toDataURL('image/png');

      const doc = new jsPDF();

      doc.addImage('/logo-pdf.png', 'PNG', 65, 30, 80, 30);
      doc.addImage(image, 'PNG', 63, 60, 85, 70);

      doc.setFont('Helvetica');
      doc.setFontSize(12)

      doc.text(`chave: ${chave}`, 70, 135);
      doc.text(`beneficiário: ${nome}`, 70, 142);
      

      const pdfContent = doc.output('datauristring');

      const newTab = window.open();
      if (newTab) {
        newTab.document.write('<iframe width="100%" height="100%" src="' + pdfContent + '"></iframe>');
      } else {
        console.error('Falha ao abrir o PDF em uma nova aba.');
      }
    });
  }
}