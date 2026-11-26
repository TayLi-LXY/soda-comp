import React from 'react';
import DataSchemaSingleItemWrapper from '@/components/DataSchemaSingleItem/wrapper';
import styles from './index.module.css';
import type { DataSchemaProps } from './types';

/**
 * 组件布局: 数据Schema
 */
const DataSchemaComponent: React.FC<DataSchemaProps> = (props) => {

  return (
    <>
      <div
        className={styles.dataSchema}
      >
        <p
          className={styles.dataSchemaP0}
        >
          {`数据 Schema`}
        </p>
        <div
          className={styles.dataSchemaDiv1}
        >
          { props.dataSchemaList.map((entity, index) => (<DataSchemaSingleItemWrapper
            entity={entity}
            index={index}
            selectSchemaCallback={props.selectSchemaCallback}
          />))}
        </div>
      </div>
    </>
  );
};

export default DataSchemaComponent;
