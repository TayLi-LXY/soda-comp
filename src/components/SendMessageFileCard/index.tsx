import React from 'react';
import FileCardComponentWrapper from '@/components/FileCardComponent/wrapper';
import { DownOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import type { SendMessageFileCardProps } from './types';

/**
 * 组件布局: 发送消息文件卡片
 */
const SendMessageFileCardComponent: React.FC<SendMessageFileCardProps> = (props) => {

  return (
    <>
      <div
        className={styles.sendMessageFileCard}
        {...props.actions.eventsSendMessageFileCard}
      >
        <FileCardComponentWrapper
          name={props.name}
          byte={props.byte}
          description={props.description}
        />
        <div
          className={styles.sendMessageFileCardDiv1}
        >
          <p
            className={styles.sendMessageFileCardDiv1P0}
          >
            {props.displayContentUnderCard}
          </p>
          <div
            className={styles.sendMessageFileCardDiv1Div1}
          >
            <DownOutlined
              className={styles.sendMessageFileCardDiv1Div1DownOutlined0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMessageFileCardComponent;
