import React from 'react';
import styles from './index.module.css';
import type { PromptsComponentProps } from './types';
import { Prompts } from '@ant-design/x';

/**
 * 组件布局: 提示集组件
 */
const PromptsComponentComponent: React.FC<PromptsComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      />
      <Prompts
        title={props.title}
        items={props.items}
        onItemClick={props.onItemClick}
        vertical={props.vertical}
        wrap={props.wrap}
        styles={props.styles}
      />
    </>
  );
};

export default PromptsComponentComponent;
