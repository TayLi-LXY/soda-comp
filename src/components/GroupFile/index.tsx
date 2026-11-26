import React from 'react';
import FileCardComponentWrapper from '@/components/FileCardComponent/wrapper';
import styles from './index.module.css';
import type { GroupFileProps } from './types';

/**
 * 组件布局: 群文件
 */
const GroupFileComponent: React.FC<GroupFileProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <p
          className={styles.divP0}
        >
          {`群文件`}
        </p>
        <div
          className={styles.divDiv1}
        >
          { props.groupFileList.map((entity, index) => (<FileCardComponentWrapper
            entity={entity}
            index={index}
          />))}
        </div>
      </div>
    </>
  );
};

export default GroupFileComponent;
