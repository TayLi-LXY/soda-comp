import React from 'react';
import ReadUnreadComponentWrapper from '@/components/ReadUnreadComponent/wrapper';
import BubbleComponentWrapper from '@/components/BubbleComponent/wrapper';
import SendSingleAttachmentInformationWrapper from '@/components/SendSingleAttachmentInformation/wrapper';
import InformationOperationComponentWrapper from '@/components/InformationOperationComponent/wrapper';
import Image from 'next/image';
import userSidePeanutAvatar from '@/assets/userSidePeanutAvatar.png';
import styles from './index.module.css';
import type { SendASingleMessageProps } from './types';

/**
 * 组件布局: 发送信息单项
 */
const SendASingleMessageComponent: React.FC<SendASingleMessageProps> = (props) => {

  return (
    <>
      <div
        className={styles.sendASingleMessage}
      >
        <div
          className={styles.sendASingleMessageDiv0}
        >
          { props.intelligentAgentNicknameVisibleControl && (<div
            className={styles.sendASingleMessageDiv0Div0}
          >
            <p
              className={styles.sendASingleMessageDiv0Div0P0}
            >
              {props.entity.senderName}
            </p>
          </div>)}
          <div
            className={styles.sendASingleMessageDiv0Div1}
          >
            <div
              className={styles.sendASingleMessageDiv0Div1Div0}
            >
              { props.sendVisibleControlForReadAndUnread && (<ReadUnreadComponentWrapper/>)}
            </div>
            <div
              className={styles.sendASingleMessageDiv0Div1Div1}
            >
              <div
                className={styles.sendASingleMessageDiv0Div1Div1Div0}
              >
                <BubbleComponentWrapper
                  content={props.messageContent}
                  streaming
                  placement="end"
                  typing={props.ifTypewriter}
                  styles={{"content":{"color":"#ffffff","background":"#1677ff"}}}
                />
                <SendSingleAttachmentInformationWrapper
                  entity={props.entity}
                />
              </div>
            </div>
          </div>
          <div
            className={styles.sendASingleMessageDiv0Div2}
          >
            { props.visibleControlOfSendingInformationOperation && (<InformationOperationComponentWrapper/>)}
          </div>
        </div>
        <div
          className={styles.sendASingleMessageDiv1}
        >
          <Image
            className={styles.sendASingleMessageDiv1Image0}
            src={userSidePeanutAvatar}
            alt=""
            height="36"
            width="36"
          />
        </div>
      </div>
    </>
  );
};

export default SendASingleMessageComponent;
