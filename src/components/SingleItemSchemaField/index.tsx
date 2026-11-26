import React from 'react';
import { ManOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import type { SingleItemSchemaFieldProps } from './types';

/**
 * 组件布局: schema字段单项
 */
const SingleItemSchemaFieldComponent: React.FC<SingleItemSchemaFieldProps> = (props) => {

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
            <ManOutlined
              className={styles.divDiv0Div0ManOutlined0}
            />
          </div>
        </div>
        <p
          className={styles.divP1}
        >
          {`字段名`}
        </p>
        <div
          className={styles.divDiv2}
        >
          <p
            className={styles.divDiv2P0}
          >
            {`字段类型`}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleItemSchemaFieldComponent;
