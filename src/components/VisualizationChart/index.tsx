import React from 'react';
import styles from './index.module.css';
import type { VisualizationChartProps } from './types';

/**
 * 组件布局: 可视化图表
 */
const VisualizationChartComponent: React.FC<VisualizationChartProps> = (props) => {

  return (
    <>
      <div
        className={styles.displayChartContainer}
      >
        <div
          className={styles.displayChartContainerDiv0}
        >
          <div
            className={styles.displayChart}
            ref={props.displayChartRef}
            options={props.displayChartOptions}
          />
        </div>
      </div>
    </>
  );
};

export default VisualizationChartComponent;
