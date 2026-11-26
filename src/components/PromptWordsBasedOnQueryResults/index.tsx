import React from 'react';
import PromptsComponentWrapper from '@/components/PromptsComponent/wrapper';
import styles from './index.module.css';
import type { PromptWordsBasedOnQueryResultsProps } from './types';

/**
 * 组件布局: 基于查询结果提示词
 */
const PromptWordsBasedOnQueryResultsComponent: React.FC<PromptWordsBasedOnQueryResultsProps> = (props) => {

  return (
    <>
      <div
        className={styles.promptWordSetDisplayContainer}
      >
        <PromptsComponentWrapper
          {...props.actions.eventsClickPromptQuestions}
          title={props.title}
          items={props.items}
          wrap={props.wrap}
          fadeIn={props.fadeIn}
        />
      </div>
    </>
  );
};

export default PromptWordsBasedOnQueryResultsComponent;
