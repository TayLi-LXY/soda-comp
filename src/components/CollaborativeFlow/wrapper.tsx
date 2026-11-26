'use client';
import React, { useMemo } from 'react';
import type { CollaborativeFlowWrapperProps, Agent, Scenario } from './types';
import CollaborativeFlowComponent from './index';
import { useCollaborativeFlow } from './logic';

/**
 * 组件逻辑: 协作流程
 */
const CollaborativeFlowWrapper: React.FC<CollaborativeFlowWrapperProps> = (props) => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  // 内部数据：智能体列表 (agents)
  const agentsData: Agent[] = props.agents || [
    { key: 'butler', name: '智能体管家', emoji: '🧠', color: '#8b5cf6', role: 'Orchestrator' },
    { key: 'sql', name: 'SQL 专家', emoji: '🗄️', color: '#3b82f6', role: 'Data Query' },
    { key: 'chart', name: '可视化专家', emoji: '📈', color: '#10b981', role: 'Visualization' },
    { key: 'insight', name: '洞察分析师', emoji: '💡', color: '#f59e0b', role: 'Analytics' },
    { key: 'clean', name: '数据清洗', emoji: '🧹', color: '#ec4899', role: 'Data Cleaning' },
    { key: 'model', name: '建模专家', emoji: '🔬', color: '#06b6d4', role: 'Modeling' },
  ];
  // 内部数据：场景列表 (scenarios)
  const scenariosData: Scenario[] = props.scenarios || [
    {
      name: ' 销售趋势分析',
      desc: '查询 → 图表 → 洞察',
      agents: ['butler', 'sql', 'chart', 'insight'],
      steps: [
        { from: 'butler', to: 'sql', label: '分发查询任务', desc: '管家将需求转化为数据查询指令' },
        { from: 'sql', to: 'chart', label: '传递查询结果', desc: 'SQL 结果传递给可视化引擎' },
        { from: 'sql', to: 'insight', label: '同步原始数据', desc: '原始数据同时发送给分析师' },
        { from: 'chart', to: 'insight', label: '图表辅助分析', desc: '图表帮助分析师发现趋势' },
        { from: 'insight', to: 'butler', label: '汇报洞察结论', desc: '分析师将最终结论返回管家' },
      ],
      stats: { agents: 4, steps: 5, messages: 5, time: '3.2s' },
    },
    {
      name: ' 数据清洗 + 分析',
      desc: '清洗 → 查询 → 可视化 → 洞察',
      agents: ['butler', 'clean', 'sql', 'chart', 'insight'],
      steps: [
        { from: 'butler', to: 'clean', label: '分发清洗任务', desc: '管家识别数据质量问题' },
        { from: 'clean', to: 'sql', label: '交付清洗数据', desc: '清洗后的干净数据传给 SQL' },
        { from: 'sql', to: 'chart', label: '聚合结果', desc: '聚合统计传给可视化' },
        { from: 'sql', to: 'insight', label: '明细数据', desc: '明细同步给分析师' },
        { from: 'chart', to: 'butler', label: '图表结果', desc: '可视化图表汇总' },
        { from: 'insight', to: 'butler', label: '分析报告', desc: '深度洞察报告' },
      ],
      stats: { agents: 5, steps: 6, messages: 6, time: '5.8s' },
    },
    {
      name: ' 预测建模',
      desc: '取数 → 清洗 → 建模 → 解读',
      agents: ['butler', 'sql', 'clean', 'model', 'insight'],
      steps: [
        { from: 'butler', to: 'sql', label: '提取训练数据', desc: '查询历史数据作为训练集' },
        { from: 'sql', to: 'clean', label: '数据预处理', desc: '原始数据需要清洗标准化' },
        { from: 'clean', to: 'model', label: '输入特征矩阵', desc: '清洗后特征传入建模引擎' },
        { from: 'model', to: 'insight', label: '预测结果', desc: '模型输出预测结果给分析师' },
        { from: 'insight', to: 'butler', label: '解读报告', desc: '分析师给出业务解读建议' },
      ],
      stats: { agents: 5, steps: 5, messages: 5, time: '8.4s' },
    },
  ];

  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */

  /*
   * end
   */

  /*
   * 获取父组件传值
   * 定义当前组件数据
   * 定义静态变量
   * 获取组件 redux 数据
   * 获取组件挂载模型数据
   * 获取组件挂载流程数据
   * 装配子组件数据
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  // 将 Agent 数组转换为 Record 格式
  const agentsMap = useMemo(() => {
    return agentsData.reduce((map, agent) => {
      map[agent.key] = agent;
      return map;
    }, {} as Record<string, Agent>);
  }, [agentsData]);

  const {
    scenarioIdx,
    stepIdx,
    playing,
    activeAgentKeys,
    canvasRef,
    onSelectScenario,
    onSelectStep,
    onPlay,
    onReset,
  } = useCollaborativeFlow(agentsMap, scenariosData);

  /*
   * [END OF YOUR CODE]
   */
  return (
    <CollaborativeFlowComponent
      scenarios={scenariosData}
      agents={agentsMap}
      scenarioIdx={scenarioIdx}
      stepIdx={stepIdx}
      playing={playing}
      activeAgentKeys={activeAgentKeys}
      canvasRef={canvasRef}
      onSelectScenario={onSelectScenario}
      onSelectStep={onSelectStep}
      onPlay={onPlay}
      onReset={onReset}
    />
  );
};

export default CollaborativeFlowWrapper;
