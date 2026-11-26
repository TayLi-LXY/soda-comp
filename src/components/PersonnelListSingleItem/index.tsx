import React from 'react';
import { Select } from 'antd';
import styles from './index.module.css';
import type { PersonnelListSingleItemProps } from './types';

/**
 * 组件布局: 人员列表单项
 */
const PersonnelListSingleItemComponent: React.FC<PersonnelListSingleItemProps> = (props) => {

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
              <div
                className={styles.divDiv0Div0Div0Div0}
              >
                <p
                  className={styles.divDiv0Div0Div0Div0P0}
                >
                  {`我`}
                </p>
              </div>
              <div
                className={styles.divDiv0Div0Div0Div1}
              >
                <p
                  className={styles.divDiv0Div0Div0Div1P0}
                >
                  {`我`}
                </p>
                <div
                  className={styles.divDiv0Div0Div0Div1Div1}
                >
                  <div
                    className={styles.divDiv0Div0Div0Div1Div1Div0}
                  >
                    <p
                      className={styles.divDiv0Div0Div0Div1Div1Div0P0}
                    >
                      {`项目角色：`}
                    </p>
                    <p
                      className={styles.divDiv0Div0Div0Div1Div1Div0P1}
                    >
                      {`管理员`}
                    </p>
                  </div>
                  <div
                    className={styles.divDiv0Div0Div0Div1Div1Div1}
                  >
                    <p
                      className={styles.divDiv0Div0Div0Div1Div1Div1P0}
                    >
                      {`空间角色：`}
                    </p>
                    <p
                      className={styles.divDiv0Div0Div0Div1Div1Div1P1}
                    >
                      {`创建者`}
                    </p>
                  </div>
                  <div
                    className={styles.divDiv0Div0Div0Div1Div1Div2}
                  >
                    <p
                      className={styles.divDiv0Div0Div0Div1Div1Div2P0}
                    >
                      {`绑定AI：`}
                    </p>
                    <p
                      className={styles.divDiv0Div0Div0Div1Div1Div2P1}
                    >
                      {`总裁AI助手`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.divDiv0Div0Div1}
            >
              <Select
                className={styles.personnelPermissionSelectComponent}
                allowClear
                showSearch
                optionFilterProp="label"
                options={props.personnelPermissionSelectComponentOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonnelListSingleItemComponent;
