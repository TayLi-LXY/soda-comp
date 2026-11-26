import React from 'react';
import QuerySummaryComponentWrapper from '@/components/QuerySummaryComponent/wrapper';
import QueryResultDataTableWrapper from '@/components/QueryResultDataTable/wrapper';
import styles from './index.module.css';
import type { SummaryOfAttachmentsForSendingInformationItemsProps } from './types';

/**
 * 组件布局: 发送信息单项附件摘要
 */
const SummaryOfAttachmentsForSendingInformationItemsComponent: React.FC<SummaryOfAttachmentsForSendingInformationItemsProps> = (props) => {

  return (
    <>
      <div
        className={styles.sendAttachmentSummary}
      >
        <QuerySummaryComponentWrapper
          summarizeContent={props.summaryContent}
        />
        <QueryResultDataTableWrapper
          fileUrl={props.file?.fileUrl}
        />
      </div>
    </>
  );
};

export default SummaryOfAttachmentsForSendingInformationItemsComponent;
