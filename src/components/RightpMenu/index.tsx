import React from 'react';
import { Button } from 'antd';
import styles from './index.module.css';
import type { RightpMenuProps } from './types';
import { ApartmentOutlined, CodeOutlined, DatabaseOutlined, EyeOutlined, LayoutOutlined, MessageOutlined } from '@ant-design/icons';

/**
 * 组件布局: 右侧顶部菜单
 */
const RightpMenuComponent: React.FC<RightpMenuProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <Button
          className={styles.intelligentAgentSwitchingButton}
          {...props.actions.eventsIntelligentAgentSwitchingButton}
          type="default"
          icon={<MessageOutlined />}
        >
          {`智能体`}
        </Button>
        <div
          className={styles.divDiv1}
        >
          { props.previewVisible && (<Button
            className={styles.divDiv1Button0}
            type="default"
            icon={<EyeOutlined />}
          >
            {`预览`}
          </Button>)}
        </div>
        <div
          className={styles.divDiv2}
        >
          { props.codeVisible && (<Button
            className={styles.divDiv2Button0}
            type="default"
            icon={<CodeOutlined />}
          >
            {`代码`}
          </Button>)}
        </div>
        { props.pageVisible && (<Button
          className={styles.divButton3}
          type="default"
          icon={<LayoutOutlined />}
        >
          {`页面`}
        </Button>)}
        <Button
          className={styles.dataButton}
          {...props.actions.eventsDataButton}
          type="default"
          icon={<DatabaseOutlined />}
        >
          {`数据`}
        </Button>
        { props.flowVisible && (<Button
          className={styles.divButton5}
          type="default"
          icon={<ApartmentOutlined />}
        >
          {`记忆`}
        </Button>)}
        <div
          className={styles.divDiv6}
        />
      </div>
    </>
  );
};

export default RightpMenuComponent;
