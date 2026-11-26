import React from 'react';
import Image from 'next/image';
import copyIcon from '@/assets/copyIcon.png';
import referenceIcon from '@/assets/referenceIcon.png';
import reportIcon from '@/assets/reportIcon.png';
import { Popconfirm, Modal } from 'antd';
import deleteIcon from '@/assets/deleteIcon.png';
import FeedbackAndReportingComponentWrapper from '@/components/FeedbackAndReportingComponent/wrapper';
import styles from './index.module.css';
import type { InformationOperationComponentProps } from './types';

/**
 * 组件布局: 信息操作组件
 */
const InformationOperationComponentComponent: React.FC<InformationOperationComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <Image
            className={styles.divDiv0Image0}
            src={copyIcon}
            alt=""
          />
        </div>
        <div
          className={styles.divDiv1}
        >
          <Image
            className={styles.divDiv1Image0}
            src={referenceIcon}
            alt=""
          />
        </div>
        <div
          className={styles.reportButton}
          {...props.actions.eventsReportButton}
        >
          <Image
            className={styles.reportButtonImage0}
            src={reportIcon}
            alt=""
          />
        </div>
        <div
          className={styles.divDiv3}
        >
          <Popconfirm
            className={styles.divDiv3Popconfirm0}
            okText="确定"
            cancelText="取消"
            title="确定删除此条信息"
          >
            <Image
              className={styles.divDiv3Popconfirm0Image0}
              src={deleteIcon}
              alt=""
            />
          </Popconfirm>
        </div>
        <div
          className={styles.divDiv4}
        >
          <Modal
            className={styles.feedbackAndReportDialogue}
            {...props.actions.eventsFeedbackAndReportDialogue}
            maskClosable
            mask
            keyboard
            focusTriggerAfterClose
            closable
            title="反馈与举报"
            footer={false}
            open={props.feedbackAndReportDialogueVisible}
          >
            <FeedbackAndReportingComponentWrapper/>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default InformationOperationComponentComponent;
