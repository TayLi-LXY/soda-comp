import React from 'react';
import { AlertOutlined } from '@ant-design/icons';
import { Select, Progress } from 'antd';
import styles from './index.module.css';
import type { InputBoxLargeModelSelectProps } from './types';

/**
 * 组件布局: 输入框大模型选择
 */
const InputBoxLargeModelSelectComponent: React.FC<InputBoxLargeModelSelectProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <AlertOutlined
            className={styles.divDiv0AlertOutlined0}
          />
        </div>
        <div
          className={styles.divDiv1}
        >
          <Select
            className={styles.inputBoxLargeModelSelectComponent}
            {...props.actions.eventsInputBoxLargeModelSelectComponent}
            allowClear
            showSearch
            optionFilterProp="label"
            options={props.inputBoxLargeModelSelectComponentOptions}
            bordered="false"
            placement="topLeft"
          />
        </div>
        <div
          className={styles.divDiv2}
        >
          <div
            className={styles.divDiv2Div0}
          >
            <Progress
              className={styles.divDiv2Div0Progress0}
              percent={80}
              strokeLinecap="round"
              type="circle"
              width="40"
              strokeWidth="12"
              showInfo={false}
            />
          </div>
          <p
            className={styles.divDiv2P1}
          >
            {`550K`}
          </p>
        </div>
      </div>
    </>
  );
};

export default InputBoxLargeModelSelectComponent;
