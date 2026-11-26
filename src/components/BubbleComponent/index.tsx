import React from 'react';
import styles from './index.module.css';
import type { BubbleComponentProps } from './types';
import { Bubble } from '@ant-design/x';

/**
 * 组件布局: 气泡组件
 */
const BubbleComponentComponent: React.FC<BubbleComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      />
      <Bubble
        placement={props.placement}
        loading={props.loading}
        content={props.content}
        editable={props.editable}
        streaming={props.streaming}
        typing={props.typing}
        header={props.header}
        footer={props.footer}
        avatar={props.avatar}
        contentRender={props.contentRender}
        styles={props.styles}
      />
    </>
  );
};

export default BubbleComponentComponent;
