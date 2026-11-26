
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnInitializeTaskParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnInitializeTaskResults {
}

/**
 * 初始化任务
 * FLOW_NODE_ON_INITIALIZE_TASK
 * 唯一id: TaskList/FLOW_CODE_ON_INITIALIZE_TASK
 */
export const flowCodeOnInitializeTask = async (params: FlowCodeOnInitializeTaskParams): Promise<FlowCodeOnInitializeTaskResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;

  // 功能：初始化任务列表数据
  // 1. 设置预定义任务数据
  // 2. 包含：id、名称、执行智能体名称、执行智能体ID

  setter.setIntelligentAgentExecutionTaskListData([
    {
      id: 'task_1',
      name: '销售数据趋势分析与洞察报告生成',
      executorAgentName: '洞察分析师',
      executorAgentId: 'insight',
    },
    {
      id: 'task_2',
      name: '多维度数据可视化报表自动生成',
      executorAgentName: '可视化专家',
      executorAgentId: 'chart',
    },
    {
      id: 'task_3',
      name: '复杂 SQL 查询语句编写与性能优化',
      executorAgentName: 'SQL 专家',
      executorAgentId: 'sql',
    },
    {
      id: 'task_4',
      name: '原始数据清洗与标准化预处理',
      executorAgentName: '数据清洗',
      executorAgentId: 'clean',
    },
    {
      id: 'task_5',
      name: '机器学习模型训练与预测结果解读',
      executorAgentName: '建模专家',
      executorAgentId: 'model',
    },
  ]);

  // 结束流程
  return {}
};
