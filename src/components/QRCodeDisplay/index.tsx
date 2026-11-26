import React from 'react';
import styles from './index.less';
import type { QRCodeDisplayProps } from './types';

import { QRCode } from 'react-qrcode-logo';

/**
 * 组件布局: 二维码展示组件
 */
const QRCodeDisplayComponent: React.FC<QRCodeDisplayProps> = (props) => {

  return (
    <>
      <div style={{ height: "auto", margin: "0 auto", width: "100%" }}>
        <QRCode
          logoPadding={2}
          removeQrCodeBehindLogo={props.removeQrCodeBehindLogo}
          logoOpacity={props.logoOpacity}
          logoWidth={props.logoWidth}
          logoHeight={props.logoHeight}
          size={props.qrCodeSize}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={props.codeContent}
          ecLevel={props.level}
          logoImage={props.logoImage}
        />
      </div>
    </>
  );
};

export default QRCodeDisplayComponent;
