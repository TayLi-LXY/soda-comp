import React from 'react';
import { SettingOutlined, DatabaseOutlined, MoneyCollectOutlined, QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import type { SettingsPanelProps } from './types';

/**
 * 组件布局: 设置面板
 */
const SettingsPanelComponent: React.FC<SettingsPanelProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.settingsButton}
        >
          <div
            className={styles.settingsButtonDiv0}
          >
            <SettingOutlined
              className={styles.settingsButtonDiv0SettingOutlined0}
            />
          </div>
          <p
            className={styles.settingsButtonP1}
          >
            {`设置`}
          </p>
        </div>
        <div
          className={styles.divDiv1}
        >
          <div
            className={styles.usageButton}
          >
            <div
              className={styles.usageButtonDiv0}
            >
              <DatabaseOutlined
                className={styles.usageButtonDiv0DatabaseOutlined0}
              />
            </div>
            <p
              className={styles.usageButtonP1}
            >
              {`用量`}
            </p>
          </div>
        </div>
        <div
          className={styles.costButton}
        >
          <div
            className={styles.costButtonDiv0}
          >
            <MoneyCollectOutlined
              className={styles.costButtonDiv0MoneyCollectOutlined0}
            />
          </div>
          <p
            className={styles.costButtonP1}
          >
            {`费用`}
          </p>
        </div>
        <div
          className={styles.divDiv3}
        />
        <div
          className={styles.helpButton}
        >
          <div
            className={styles.helpButtonDiv0}
          >
            <QuestionCircleOutlined
              className={styles.helpButtonDiv0QuestionCircleOutlined0}
            />
          </div>
          <p
            className={styles.helpButtonP1}
          >
            {`帮助`}
          </p>
        </div>
        <div
          className={styles.exitButton}
        >
          <div
            className={styles.exitButtonDiv0}
          >
            <LogoutOutlined
              className={styles.exitButtonDiv0LogoutOutlined0}
            />
          </div>
          <p
            className={styles.exitButtonP1}
          >
            {`退出`}
          </p>
        </div>
      </div>
    </>
  );
};

export default SettingsPanelComponent;
