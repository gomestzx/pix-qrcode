import { QRCodeSVG } from "qrcode.react";
import React from "react";
import { IQRCode } from "./types";
import styles from "./styles.module.css";

const QRCode = (props: IQRCode) => {
  return (
    <div className="p-2 bg-white">
      <QRCodeSVG
        className={styles.qrcode}
        value={props.value}
        size={190}
        bgColor={"#ffffff"}
        fgColor={props.color}
        level={"L"}
        includeMargin={false}
      />
    </div>
  );
};

export default QRCode;
