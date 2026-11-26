import React from 'react';
import styles from './index.module.css';
import type { RequirementComponentProps } from './types';

/**
 * 组件布局: 需求组件
 */
const RequirementComponentComponent: React.FC<RequirementComponentProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      />
    </>
  );
};

export default RequirementComponentComponent;
