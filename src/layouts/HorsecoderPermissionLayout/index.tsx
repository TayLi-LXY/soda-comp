import React from 'react';
import styles from './index.module.css';
import type { HorsecoderPermissionLayoutProps } from './types';

/**
 * 组件布局: 倚码权限布局
 */
const HorsecoderPermissionLayoutPage: React.FC<HorsecoderPermissionLayoutProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        {props.children}
      </div>
    </>
  );
};

export default HorsecoderPermissionLayoutPage;
