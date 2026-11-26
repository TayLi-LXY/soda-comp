import React from 'react';
import { Tooltip } from 'antd';
import { PaperClipOutlined, AudioOutlined, SmileOutlined, BulbOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import type { LeftolbarBelowInputBoxProps } from './types';

/**
 * 组件布局: 输入框下方左侧工具栏
 */
const LeftolbarBelowInputBoxComponent: React.FC<LeftolbarBelowInputBoxProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <div
            className={styles.attachmentButton}
          >
            <Tooltip
              className={styles.attachmentButtonTooltip0}
              title="附件"
            >
              <PaperClipOutlined
                className={styles.attachmentButtonTooltip0PaperClipOutlined0}
              />
            </Tooltip>
          </div>
          { props.visibleControlOfMicrophone && (<div
            className={styles.voiceButton}
          >
            <Tooltip
              className={styles.voiceButtonTooltip0}
              title="语音"
            >
              <AudioOutlined
                className={styles.voiceButtonTooltip0AudioOutlined0}
              />
            </Tooltip>
          </div>)}
          <div
            className={styles.emojiButton}
          >
            <Tooltip
              className={styles.emojiButtonTooltip0}
              title="表情"
            >
              <SmileOutlined
                className={styles.emojiButtonTooltip0SmileOutlined0}
              />
            </Tooltip>
          </div>
          <div
            className={styles.aIButton}
          >
            <Tooltip
              className={styles.aIButtonTooltip0}
              title="AI"
            >
              <BulbOutlined
                className={styles.aIButtonTooltip0BulbOutlined0}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftolbarBelowInputBoxComponent;
