import React from 'react';
import QRCodeDisplay from '@/components/QRCodeDisplay/wrapper';
import styles from './index.module.css';
import type { WeChatLoginProps } from './types';

/**
 * 组件布局: 微信登录
 */
const WeChatLoginComponent: React.FC<WeChatLoginProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <p
            className={styles.divDiv0P0}
          >
            {`微信扫码`}
          </p>
          <p
            className={styles.divDiv0P1}
          >
            {`请使用手机扫码`}
          </p>
        </div>
        <div
          className={styles.divDiv1}
        >
          <QRCodeDisplay
            codeContent={props.qRCodeDisplayComponentCodeContent}
            level={props.qRCodeDisplayComponentLevel}
            logoImage={props.qRCodeDisplayComponentLogoImage}
            logoWidth={props.qRCodeDisplayComponentLogoWidth}
            logoHeight={props.qRCodeDisplayComponentLogoHeight}
            qrCodeSize={props.qRCodeDisplayComponentQrCodeSize}
            qRCodeDensity={props.qRCodeDisplayComponentQRCodeDensity}
            logoOpacity={props.qRCodeDisplayComponentLogoOpacity}
            removeQrCodeBehindLogo={props.qRCodeDisplayComponentRemoveQrCodeBehindLogo}
          />
        </div>
        <div
          className={styles.divDiv2}
        >
          <p
            className={styles.divDiv2P0}
          >
            {`打开微信扫描二维码`}
          </p>
          <p
            className={styles.divDiv2P1}
          >
            {`请使用「微信」-「扫一扫」`}
          </p>
        </div>
        <div
          className={styles.divDiv3}
        >
          <div
            className={styles.returnAccountLoginButton}
            {...props.actions.eventsReturnAccountLoginButton}
          >
            <p
              className={styles.returnAccountLoginButtonP0}
            >
              {`< 返回账号登录`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeChatLoginComponent;
