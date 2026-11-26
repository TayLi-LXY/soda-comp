
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnInitializeIntelligentAgentListParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnInitializeIntelligentAgentListResults {
}

/**
 * 初始化智能体列表
 * FLOW_NODE_ON_INITIALIZE_INTELLIGENT_AGENT_LIST
 * 唯一id: IntelligentAgentSelectComponent/FLOW_CODE_ON_INITIALIZE_INTELLIGENT_AGENT_LIST
 */
export const flowCodeOnInitializeIntelligentAgentList = async (params: FlowCodeOnInitializeIntelligentAgentListParams): Promise<FlowCodeOnInitializeIntelligentAgentListResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;

  // 功能：初始化智能体选择组件的候选列表
  // 1. 设置 6 个预定义智能体数据
  // 2. 包含智能体管家、SQL 专家、可视化专家、洞察分析师、数据清洗、建模专家

  //   // 智能体单项数据结构
  // export type AgentItem = {
  //   // 基础信息
  //   id: string;           // 唯一标识
  //   name: string;         // 名称，如 "数据"
  //   description: string;  // 功能描述

  //   // 角色信息
  //   projectRole: string;  // 项目角色，如 "画图"
  //   spaceRole: string;    // 空间角色，如 "执行智能体"

  //   // 配置统计
  //   containers: number;   // 容器数量
  //   dataCount: number;    // 数据数量
  //   interactions: number; // 交互数量
  //   configs: number;      // 配置数量
  //   styles: number;       // 样式数量
  //   models: number;       // 模型数量

  //   // 状态信息
  //   isSelected: boolean;  // 是否被选中
  //   isEnabled: boolean;   // 是否启用
  // };

  // 设置候选智能体列表数据
  setter.setCandidateAgentListData([
    {
      id: 'butler',
      name: '智能体管家',
      description: '负责任务分发和流程编排',
      projectRole: '编排',
      spaceRole: '执行智能体',
      containers: 2,
      dataCount: 0,
      interactions: 0,
      configs: 0,
      styles: 4,
      models: 0,
      isSelected: false,
      isEnabled: true,
    },
    {
      id: 'sql',
      name: 'SQL 专家',
      description: '负责数据查询和处理',
      projectRole: '数据',
      spaceRole: '执行智能体',
      containers: 1,
      dataCount: 2,
      interactions: 1,
      configs: 1,
      styles: 2,
      models: 0,
      isSelected: false,
      isEnabled: true,
    },
    {
      id: 'chart',
      name: '可视化专家',
      description: '负责数据可视化和图表生成',
      projectRole: '画图',
      spaceRole: '执行智能体',
      containers: 2,
      dataCount: 0,
      interactions: 0,
      configs: 0,
      styles: 4,
      models: 0,
      isSelected: false,
      isEnabled: true,
    },
    {
      id: 'insight',
      name: '洞察分析师',
      description: '负责数据分析和洞察发现',
      projectRole: '分析',
      spaceRole: '执行智能体',
      containers: 1,
      dataCount: 3,
      interactions: 2,
      configs: 1,
      styles: 1,
      models: 1,
      isSelected: false,
      isEnabled: true,
    },
    {
      id: 'clean',
      name: '数据清洗',
      description: '负责数据清洗和预处理',
      projectRole: '处理',
      spaceRole: '执行智能体',
      containers: 1,
      dataCount: 1,
      interactions: 0,
      configs: 2,
      styles: 0,
      models: 0,
      isSelected: false,
      isEnabled: true,
    },
    {
      id: 'model',
      name: '建模专家',
      description: '负责模型训练和预测',
      projectRole: '建模',
      spaceRole: '执行智能体',
      containers: 0,
      dataCount: 2,
      interactions: 1,
      configs: 3,
      styles: 0,
      models: 2,
      isSelected: false,
      isEnabled: true,
    },
  ]);

  // 结束流程
  return {}
};
