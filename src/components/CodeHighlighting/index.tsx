import React from 'react';
import styles from './index.module.css';
import type { CodeHighlightingProps } from './types';
import { CodeHighlighter } from '@ant-design/x';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * 组件布局: 代码高亮
 */
const CodeHighlightingComponent: React.FC<CodeHighlightingProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        />
        <CodeHighlighter lang={props.lang} highlightProps={{ style: oneDark }} >
          {props.code ?? ''}
        </CodeHighlighter>
      </div>
    </>
  );
};

export default CodeHighlightingComponent;
