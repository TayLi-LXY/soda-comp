import React from 'react';
import { BarChartOutlined, ProjectTwoTone, SaveOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import SQLDisplayWrapper from '@/components/SQLDisplay/wrapper';
import QuerySummaryComponentWrapper from '@/components/QuerySummaryComponent/wrapper';
import VisualizationChartWrapper from '@/components/VisualizationChart/wrapper';
import QueryResultDataTableWrapper from '@/components/QueryResultDataTable/wrapper';
import PromptWordsBasedOnQueryResultsWrapper from '@/components/PromptWordsBasedOnQueryResults/wrapper';
import styles from './index.module.css';
import type { QueryResultDisplayComponentProps } from './types';

/**
 * 组件布局: 查询结果展示组件
 */
const QueryResultDisplayComponentComponent: React.FC<QueryResultDisplayComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.queryResult}
      >
        <div
          className={styles.queryResultDiv0}
        >
          <div
            className={styles.queryResultDiv0Div0}
          >
            <ProjectTwoTone
              className={styles.queryResultDiv0Div0ProjectTwoTone0}
            />
            <p
              className={styles.queryResultDiv0Div0P1}
            >
              {`查询结果`}
            </p>
            <div
              className={styles.queryResultDiv0Div0Div2}
            >
              <div
                className={styles.queryResultDiv0Div0Div2Div0}
              >
                <p
                  className={styles.queryResultDiv0Div0Div2Div0P0}
                >
                  {`112`}
                </p>
                <p
                  className={styles.queryResultDiv0Div0Div2Div0P1}
                >
                  {`行`}
                </p>
              </div>
              <div
                className={styles.queryResultDiv0Div0Div2Div1}
              >
                <p
                  className={styles.queryResultDiv0Div0Div2Div1P0}
                >
                  {`1.2s`}
                </p>
              </div>
            </div>
          </div>
          <div
            className={styles.queryResultDiv0Div1}
          >
            <Button
              className={styles.sQLButton}
              {...props.actions.eventsSQLButton}
              type="default"
            >
              {`SQL`}
            </Button>
            <Button
              className={styles.chartSwitchButton}
              {...props.actions.eventsChartSwitchButton}
              type="default"
              icon={<BarChartOutlined />}
            >
              {`图表`}
            </Button>
            <Button
              className={styles.queryResultDiv0Div1Button2}
              type="default"
              icon={<SaveOutlined />}
            >
              {`保存流程`}
            </Button>
          </div>
        </div>
        <div
          className={styles.queryResultDiv1}
        >
          { props.sQLComponentVisibleControl && (<div
            className={styles.queryResultDiv1Div0}
          >
            <SQLDisplayWrapper/>
          </div>)}
          <div
            className={styles.queryResultDiv1Div1}
          >
            <QuerySummaryComponentWrapper
              summarizeContent={props.summarizeContent}
            />
          </div>
          { props.visibleControlOfChartComponent && (<div
            className={styles.queryResultDiv1Div2}
          >
            <VisualizationChartWrapper/>
          </div>)}
        </div>
        <div
          className={styles.queryResultDiv2}
        >
          <QueryResultDataTableWrapper
            fileUrl={props.fileUrl}
          />
        </div>
        <div
          className={styles.queryResultDiv3}
        >
          <div
            className={styles.queryResultDiv3Div0}
          >
            <PromptWordsBasedOnQueryResultsWrapper
              items={props.items}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryResultDisplayComponentComponent;
