import React from 'react';
import styles from './index.module.css';
import type { ThinkComponentProps } from './types';
import { Think } from '@ant-design/x';

/**
 * 组件布局: 思考过程组件
 */
const ThinkComponentComponent: React.FC<ThinkComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      />
      <Think
        title={props.title}
        loading={ props.loading}
        classNames={props.classNames}
        styles={props.styles}
        blink={props.blink}
      >
        {props.children}
      </Think>
    </>
  );
};

export default ThinkComponentComponent;
