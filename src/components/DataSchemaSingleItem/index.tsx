import React from 'react';
import SingleItemSchemaFieldWrapper from '@/components/SingleItemSchemaField/wrapper';
import styles from './index.module.css';
import type { DataSchemaSingleItemProps } from './types';

/**
 * 组件布局: 数据Schema单项
 */
const DataSchemaSingleItemComponent: React.FC<DataSchemaSingleItemProps> = (props) => {

  return (
    <>
      <div
        className={styles.dataSchemaSingleItem}
        {...props.actions.eventsDataSchemaSingleItem}
      >
        <div
          className={styles.dataSchemaSingleItemDiv0}
        >
          <div
            className={styles.dataSchemaSingleItemDiv0Div0}
          >
            <p
              className={styles.dataSchemaSingleItemDiv0Div0P0}
            >
              {props.entity?.dialogueDataSchema?.schemaName}
            </p>
            <p
              className={styles.dataSchemaSingleItemDiv0Div0P1}
            >
              {`文件名`}
            </p>
          </div>
          <div
            className={styles.dataSchemaSingleItemDiv0Div1}
          >
            <div
              className={styles.dataSchemaSingleItemDiv0Div1Div0}
            >
              <p
                className={styles.dataSchemaSingleItemDiv0Div1Div0P0}
              >
                {`xx`}
              </p>
              <p
                className={styles.dataSchemaSingleItemDiv0Div1Div0P1}
              >
                {`行`}
              </p>
            </div>
            <div
              className={styles.dataSchemaSingleItemDiv0Div1Div1}
            >
              <p
                className={styles.dataSchemaSingleItemDiv0Div1Div1P0}
              >
                {`xx`}
              </p>
              <p
                className={styles.dataSchemaSingleItemDiv0Div1Div1P1}
              >
                {`列`}
              </p>
            </div>
          </div>
        </div>
        <div
          className={styles.dataSchemaSingleItemDiv1}
        >
          { props.schemaFieldList.map((entity, index) => (<SingleItemSchemaFieldWrapper
            entity={entity}
            index={index}
          />))}
        </div>
      </div>
    </>
  );
};

export default DataSchemaSingleItemComponent;
