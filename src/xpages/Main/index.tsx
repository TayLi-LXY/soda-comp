import React from 'react';
import LeftComponentWrapper from '@/components/LeftComponent/wrapper';
import RightComponentWrapper from '@/components/RightComponent/wrapper';
import { Modal } from 'antd';
import OrderSelectWrapper from '@/components/OrderSelect/wrapper';
import styles from './index.module.css';
import type { MainProps } from './types';

/**
 * 组件布局: 主页
 */
const MainPage: React.FC<MainProps> = (props) => {

  return (
    <>
      <div
        className={styles.homeContainer}
      >
        <div
          className={styles.homeContainerDiv0}
        >
          <div
            className={styles.onLeftSideOfHomepage}
          >
            <LeftComponentWrapper/>
          </div>
          <div
            className={styles.homeContainerDiv0Div1}
          >
            <RightComponentWrapper/>
            <div
              className={styles.homeContainerDiv0Div1Div1}
            >
              <Modal
                className={styles.upgradePlan}
                {...props.actions.eventsUpgradePlan}
                maskClosable
                mask
                keyboard
                focusTriggerAfterClose
                closable
                title="升级套餐"
                footer={false}
                open={props.upgradePlanVisible}
                width={800}
              >
                <OrderSelectWrapper/>
              </Modal>
            </div>
          </div>
        </div>
        <div
          className={styles.homeContainerDiv1}
        >
          <div
            className={styles.homeContainerDiv1Div0}
          >
            <div
              className={styles.homeContainerDiv1Div0Div0}
            >
              <div
                className={styles.homeContainerDiv1Div0Div0Div0}
              />
              <p
                className={styles.homeContainerDiv1Div0Div0P1}
              >
                {`已连接`}
              </p>
            </div>
            <div
              className={styles.homeContainerDiv1Div0Div1}
            >
              <p
                className={styles.homeContainerDiv1Div0Div1P0}
              >
                {`空间`}
              </p>
              <p
                className={styles.homeContainerDiv1Div0Div1P1}
              >
                {`研发中心`}
              </p>
            </div>
            <div
              className={styles.homeContainerDiv1Div0Div2}
            >
              <p
                className={styles.homeContainerDiv1Div0Div2P0}
              >
                {`项目：`}
              </p>
              <p
                className={styles.homeContainerDiv1Div0Div2P1}
              >
                {`CRM-Projec`}
              </p>
            </div>
          </div>
          <div
            className={styles.homeContainerDiv1Div1}
          >
            <p
              className={styles.homeContainerDiv1Div1P0}
            >
              {`© 2018-2026 武汉隐向量科技有限公司 保留所有权利 | 鄂ICP备20004605号-1`}
            </p>
          </div>
          <div
            className={styles.homeContainerDiv1Div2}
          >
            <div
              className={styles.homeContainerDiv1Div2Div0}
            >
              <p
                className={styles.homeContainerDiv1Div2Div0P0}
              >
                {`1`}
              </p>
              <p
                className={styles.homeContainerDiv1Div2Div0P1}
              >
                {`条消息`}
              </p>
            </div>
            <div
              className={styles.homeContainerDiv1Div2Div1}
            >
              <p
                className={styles.homeContainerDiv1Div2Div1P0}
              >
                {`在线人数：`}
              </p>
              <p
                className={styles.homeContainerDiv1Div2Div1P1}
              >
                {`3`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
