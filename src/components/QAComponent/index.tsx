import React from 'react';
import ThinkComponentWrapper from '@/components/ThinkComponent/wrapper';
import QASingleComponentWrapper from '@/components/QASingleComponent/wrapper';
import styles from './index.module.css';
import type { QAComponentProps } from './types';

/**
 * 组件布局: 问答组件
 */
const QAComponentComponent: React.FC<QAComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.qaComponentContainer}
      >
        <div
          className={styles.qaComponentContainerDiv0}
        >
          <p
            className={styles.qaComponentContainerDiv0P0}
          >
            {props.entity.periodTime}
          </p>
        </div>
        { props.thinkingProcessVisibleControl && (<div
          className={styles.qaComponentContainerDiv1}
        >
          <ThinkComponentWrapper
            title={props.title}
            children={props.children}
            blink={props.blink}
            loading={props.loading}
          />
        </div>)}
        <div
          className={styles.qaComponentContainerDiv2}
        >
          <QASingleComponentWrapper
            entity={props.entity}
            index={props.index}
          />
        </div>
      </div>
    </>
  );
};

export default QAComponentComponent;
