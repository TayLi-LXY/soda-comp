import React from 'react';
import ReplyIndividualComponentWrapper from '@/components/ReplyIndividualComponent/wrapper';
import SendASingleMessageWrapper from '@/components/SendASingleMessage/wrapper';
import styles from './index.module.css';
import type { QASingleComponentProps } from './types';

/**
 * 组件布局: 问答单项组件
 */
const QASingleComponentComponent: React.FC<QASingleComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.qASingleComponent}
      >
        { props.chatReplyVisibleControl && (<ReplyIndividualComponentWrapper
          entity={props.entity}
          index={props.index}
        />)}
        { props.visibleControlOfSendingInformation && (<SendASingleMessageWrapper
          entity={props.entity}
          index={props.index}
        />)}
      </div>
    </>
  );
};

export default QASingleComponentComponent;
