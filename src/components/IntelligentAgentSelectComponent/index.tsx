import React from 'react';
import { Acceleration, AlignLeftOne, Robot, Abnormal } from '@icon-park/react';
import TaskListWrapper from '@/components/TaskList/wrapper';
import IntelligentAgentSingleComponentWrapper from '@/components/IntelligentAgentSingleComponent/wrapper';
import { LoadingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styles from './index.module.css';
import type { IntelligentAgentSelectComponentProps } from './types';

/**
 * 组件布局: 智能体选择组件
 */
const IntelligentAgentSelectComponentComponent: React.FC<IntelligentAgentSelectComponentProps> = (props) => {

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
            <Acceleration
              className={styles.divDiv0Div0Acceleration0}
              theme="two-tone"
              size="24"
              strokeWidth={2}
            />
            <h3
              className={styles.divDiv0Div0H31}
            >
              {`确认你的协作智能体`}
            </h3>
          </div>
          <div
            className={styles.intelligentAgentConfirmationPanel}
          >
            <div
              className={styles.intelligentAgentConfirmationPanelDiv0}
            >
              <div
                className={styles.intelligentAgentConfirmationPanelDiv0Div0}
              >
                <div
                  className={styles.intelligentAgentConfirmationPanelDiv0Div0Div0}
                >
                  <AlignLeftOne
                    className={styles.intelligentAgentConfirmationPanelDiv0Div0Div0AlignLeftOne0}
                    theme="two-tone"
                    size="24"
                    strokeWidth={2}
                  />
                  <h3
                    className={styles.intelligentAgentConfirmationPanelDiv0Div0Div0H31}
                  >
                    {`任务`}
                  </h3>
                  <p
                    className={styles.intelligentAgentConfirmationPanelDiv0Div0Div0P2}
                  >
                    {`智能体们将协作完成以下任务`}
                  </p>
                </div>
                <div
                  className={styles.intelligentAgentConfirmationPanelDiv0Div0Div1}
                />
              </div>
              <div
                className={styles.intelligentAgentConfirmationPanelDiv0Div1}
              >
                <TaskListWrapper/>
              </div>
            </div>
            <div
              className={styles.intelligentAgentConfirmationPanelDiv1}
            >
              <Robot
                className={styles.intelligentAgentConfirmationPanelDiv1Robot0}
                theme="two-tone"
                size="24"
                strokeWidth={2}
              />
              <h3
                className={styles.intelligentAgentConfirmationPanelDiv1H31}
              >
                {`智能体`}
              </h3>
              <p
                className={styles.intelligentAgentConfirmationPanelDiv1P2}
              >
                {`根据需求，你可能需要以下智能体来协助你完成任务`}
              </p>
            </div>
            { props.candidateAgentListData.map((entity, index) => (<IntelligentAgentSingleComponentWrapper
              entity={entity}
              index={index}
            />))}
            <div
              className={styles.intelligentAgentConfirmationPanelDiv3}
            >
              <div
                className={styles.intelligentAgentConfirmationPanelDiv3Div0}
              >
                <Abnormal
                  className={styles.intelligentAgentConfirmationPanelDiv3Div0Abnormal0}
                  theme="two-tone"
                  size="24"
                  strokeWidth={2}
                />
                <h3
                  className={styles.intelligentAgentConfirmationPanelDiv3Div0H31}
                >
                  {`概述`}
                </h3>
                <p
                  className={styles.intelligentAgentConfirmationPanelDiv3Div0P2}
                >
                  {`协作`}
                </p>
              </div>
              <div
                className={styles.intelligentAgentConfirmationPanelDiv3Div1}
              >
                <p
                  className={styles.intelligentAgentConfirmationPanelDiv3Div1P0}
                >
                  {`该数据集为某高校计算机学院的期末考试监考安排表，以 2026 年 06 月 30 日为基准日期、按考试时间排序。表格每一行对应一间考场的单个考试时段，包含开课学院、课程名称、年级、课程编号、考试时间、教学楼及教室、考生人数、监考派出学院（计算机学院）、所需监考教师人数、已分配监考人员、巡考人员等字段。本数据集剔除了 Python 课程巡考相关记录，覆盖的考试场次主要集中在 2026 年 06 月 10 日至 2026 年 06 月 29 日。可用于对刚结束的本次考期开展监考工作量分配、考场使用情况、跨学院协同、考务质量保障等维度分析，同时也能支撑后续考务规划工作。`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.divDiv1}
        >
          <div
            className={styles.divDiv1Div0}
          >
            <LoadingOutlined
              className={styles.divDiv1Div0LoadingOutlined0}
            />
            <p
              className={styles.divDiv1Div0P1}
            >
              {`正在等待确认智能体`}
            </p>
          </div>
          <Button
            className={styles.divDiv1Button1}
            type="primary"
          >
            {`确认`}
          </Button>
        </div>
      </div>
    </>
  );
};

export default IntelligentAgentSelectComponentComponent;
