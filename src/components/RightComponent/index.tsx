import React from 'react';
import DialogueWrapper from '@/components/Dialogue/wrapper';
import PanelWrapper from '@/components/Panel/wrapper';
import styles from './index.module.css';
import type { RightComponentProps } from './types';

/**
 * 组件布局: 右侧组件
 */
const RightComponentComponent: React.FC<RightComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.rightComponent}
      >
        <div
          className={styles.rightComponentDiv0}
        >
          <DialogueWrapper/>
        </div>
        <div
          className={styles.rightComponentDiv1}
          {...props.actions.eventsRightComponentDiv1}
        />
        <div
          className={styles.rightComponentDiv2}
        >
          <PanelWrapper/>
        </div>
      </div>
    </>
  );
};

export default RightComponentComponent;
