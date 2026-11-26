import React from 'react';
import { Button } from 'antd';
import styles from './index.module.css';
import type { DisplayCardItemsAfterFileUploadProps } from './types';

/**
 * 组件布局: 文件上传后展示卡片单项
 */
const DisplayCardItemsAfterFileUploadComponent: React.FC<DisplayCardItemsAfterFileUploadProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <div
            className={styles.divDiv0Div0}
          />
          <div
            className={styles.divDiv0Div1}
          >
            <div
              className={styles.divDiv0Div1Div0}
            >
              <p
                className={styles.divDiv0Div1Div0P0}
              >
                {props.entity?.filename}
              </p>
            </div>
            <div
              className={styles.divDiv0Div1Div1}
            >
              <p
                className={styles.divDiv0Div1Div1P0}
              >
                {props.entity?.fileSize}
              </p>
              <p
                className={styles.divDiv0Div1Div1P1}
              >
                {props.entity?.fileStatus}
              </p>
            </div>
          </div>
        </div>
        <div
          className={styles.divDiv1}
        >
          <Button
            className={styles.deleteFileButton}
            {...props.actions.eventsDeleteFileButton}
            type="primary"
          >
            {`X`}
          </Button>
        </div>
      </div>
    </>
  );
};

export default DisplayCardItemsAfterFileUploadComponent;
