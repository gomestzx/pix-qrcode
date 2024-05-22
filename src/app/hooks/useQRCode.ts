import { useContext } from "react";
import { QRCodeContext } from "../context/QRCodeContext";

export function useQRCode() {
  const ctx = useContext(QRCodeContext);
  return ctx;
}
