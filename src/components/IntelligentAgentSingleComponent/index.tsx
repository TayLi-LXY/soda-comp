import React from 'react';
import { Checkbox } from 'antd';
import styles from './index.module.css';
import type { IntelligentAgentSingleComponentProps } from './types';

/**
 * 组件布局: 智能体单项组件
 */
const IntelligentAgentSingleComponentComponent: React.FC<IntelligentAgentSingleComponentProps> = (props) => {

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
                {`画`}
              </p>
            </div>
            <div
              className={styles.divDiv0Div0Div1}
            >
              <div
                className={styles.divDiv0Div0Div1Div0}
              >
                <p
                  className={styles.divDiv0Div0Div1Div0P0}
                >
                  {props.entity.name}
                </p>
                <p
                  className={styles.divDiv0Div0Div1Div0P1}
                >
                  {props.entity.description}
                </p>
              </div>
              <div
                className={styles.divDiv0Div0Div1Div1}
              >
                <div
                  className={styles.divDiv0Div0Div1Div1Div0}
                >
                  <p
                    className={styles.divDiv0Div0Div1Div1Div0P0}
                  >
                    {`项目角色：`}
                  </p>
                  <p
                    className={styles.divDiv0Div0Div1Div1Div0P1}
                  >
                    {props.entity.projectRole}
                  </p>
                </div>
                <div
                  className={styles.divDiv0Div0Div1Div1Div1}
                >
                  <p
                    className={styles.divDiv0Div0Div1Div1Div1P0}
                  >
                    {`空间角色：`}
                  </p>
                  <p
                    className={styles.divDiv0Div0Div1Div1Div1P1}
                  >
                    {props.entity.spaceRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
          { props.intelligentAgentSelectVisible && (<div
            className={styles.divDiv0Div1}
          >
            <Checkbox
              className={styles.divDiv0Div1Checkbox0}
              autoFocus={false}
              checked
              defaultChecked={false}
              disabled={false}
              indeterminate={false}
            >
              {`选择`}
            </Checkbox>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default IntelligentAgentSingleComponentComponent;
