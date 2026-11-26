import React from 'react';
import { Badge } from 'antd';
import styles from './index.module.css';
import type { DialogueCardSelectedProps } from './types';

/**
 * 组件布局: 对话卡片被选中
 */
const DialogueCardSelectedComponent: React.FC<DialogueCardSelectedProps> = () => {

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
          >
            <div
              className={styles.divDiv0Div0Div0}
            >
              <p
                className={styles.divDiv0Div0Div0P0}
              >
                {`张`}
              </p>
            </div>
          </div>
          <div
            className={styles.divDiv0Div1}
          >
            <div
              className={styles.divDiv0Div1Div0}
            >
              <p
                className={styles.divDiv0Div1Div0P0}
              >
                {`CRM需求评审`}
              </p>
              <p
                className={styles.divDiv0Div1Div0P1}
              >
                {`4小时前`}
              </p>
            </div>
            <div
              className={styles.divDiv0Div1Div1}
            >
              <p
                className={styles.divDiv0Div1Div1P0}
              >
                {`李产品：报表模块的指标口径需要和张工确认一下`}
              </p>
              <div
                className={styles.divDiv0Div1Div1Div1}
              >
                <Badge
                  className={styles.divDiv0Div1Div1Div1Badge0}
                  count={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogueCardSelectedComponent;
