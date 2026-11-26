import React from 'react';
import SendMessageFileCardWrapper from '@/components/SendMessageFileCard/wrapper';
import SummaryOfAttachmentsForSendingInformationItemsWrapper from '@/components/SummaryOfAttachmentsForSendingInformationItems/wrapper';
import styles from './index.module.css';
import type { SendSingleAttachmentInformationProps } from './types';

/**
 * 组件布局: 发送信息单项附件
 */
const SendSingleAttachmentInformationComponent: React.FC<SendSingleAttachmentInformationProps> = (props) => {

  return (
    <>
      <div
        className={styles.sendAttachments}
      >
        <div
          className={styles.sendAttachmentsDiv0}
        >
          { props.sendMessageFileCardList.map((entity, index) => (<SendMessageFileCardWrapper
            {...props.actions.eventsSendAttachmentList}
            entity={entity}
            index={index}
          />))}
        </div>
        { props.uploadFileSummaryVisibleControl && (<div
          className={styles.sendAttachmentsDiv1}
        >
          <SummaryOfAttachmentsForSendingInformationItemsWrapper
            file={props.file}
          />
        </div>)}
      </div>
    </>
  );
};

export default SendSingleAttachmentInformationComponent;
