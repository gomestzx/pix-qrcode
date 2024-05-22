import { QRCodeContext } from "@/context/QRCodeContext";
import { useContext } from "react";

export function useQRCode() {
  const ctx = useContext(QRCodeContext);
  return ctx;
}
