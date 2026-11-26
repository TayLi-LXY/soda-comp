import React from 'react';
import Image from 'next/image';
import google from '@/assets/google.png';
import styles from './index.module.css';
import type { GoogleLoginProps } from './types';

/**
 * 组件布局: google登录
 */
const GoogleLoginComponent: React.FC<GoogleLoginProps> = () => {

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
            {`Google账号`}
          </p>
          <p
            className={styles.divDiv0P1}
          >
            {`使用Google账号授权登录`}
          </p>
        </div>
        <div
          className={styles.divDiv1}
        >
          <Image
            className={styles.divDiv1Image0}
            src={google}
            alt=""
            width="56"
            height="56"
          />
        </div>
        <div
          className={styles.divDiv2}
        >
          <p
            className={styles.divDiv2P0}
          >
            {`使用 Google 账号登录`}
          </p>
          <p
            className={styles.divDiv2P1}
          >
            {`将通过 Google OAuth 授权登录倚码 HorseCoder`}
          </p>
        </div>
        <div
          className={styles.divDiv3}
        >
          <Image
            className={styles.divDiv3Image0}
            src={google}
            alt=""
            width="20"
            height="20"
          />
          <p
            className={styles.divDiv3P1}
          >
            {`使用 Google 账号登录`}
          </p>
        </div>
        <div
          className={styles.divDiv4}
        >
          <div
            className={styles.divDiv4Div0}
          >
            <p
              className={styles.divDiv4Div0P0}
            >
              {`< 返回账号登录`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleLoginComponent;
