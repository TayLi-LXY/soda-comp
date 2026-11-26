
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * activeSubpanel 活跃子面板
 */
export interface FlowCodeOnDetermineDisplayComponentBasedOnActiveSubPanelsParams {
  setter: any;
  dispatch: any;
  activeSubpanel: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnDetermineDisplayComponentBasedOnActiveSubPanelsResults {
}

/**
 * 根据活跃子面板决定展示组件
 * FLOW_NODE_ON_DETERMINE_DISPLAY_COMPONENT_BASED_ON_ACTIVE_SUB_PANELS
 * 唯一id: Panel/FLOW_CODE_ON_DETERMINE_DISPLAY_COMPONENT_BASED_ON_ACTIVE_SUB_PANELS
 */
export const flowCodeOnDetermineDisplayComponentBasedOnActiveSubPanels = async (params: FlowCodeOnDetermineDisplayComponentBasedOnActiveSubPanelsParams): Promise<FlowCodeOnDetermineDisplayComponentBasedOnActiveSubPanelsResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { activeSubpanel } = params;

  // 根据活跃子面板展示不同组件
  switch (activeSubpanel) {
    case 'intelligentAgent':
      // 智能体面板 - 显示协作流程
      if (setter.setCanvasVisible) setter.setCanvasVisible(false);
      if (setter.setCollaborativeFlowVisible) setter.setCollaborativeFlowVisible(true);
      if (setter.setTableVisualizationVisible) setter.setTableVisualizationVisible(false);
      break;
    case 'preview':
      // 预览面板
      if (setter.setCanvasVisible) setter.setCanvasVisible(false);
      if (setter.setCollaborativeFlowVisible) setter.setCollaborativeFlowVisible(false);
      if (setter.setTableVisualizationVisible) setter.setTableVisualizationVisible(true);
      break;
    case 'code':
      // 代码面板
      if (setter.setCanvasVisible) setter.setCanvasVisible(false);
      if (setter.setCollaborativeFlowVisible) setter.setCollaborativeFlowVisible(false);
      if (setter.setTableVisualizationVisible) setter.setTableVisualizationVisible(false);
      break;
    case 'page':
      // 页面板
      if (setter.setCanvasVisible) setter.setCanvasVisible(true);
      if (setter.setCollaborativeFlowVisible) setter.setCollaborativeFlowVisible(false);
      if (setter.setTableVisualizationVisible) setter.setTableVisualizationVisible(false);
      break;
    case 'data':
      // 数据面板 - 显示表格可视化
      if (setter.setCanvasVisible) setter.setCanvasVisible(true);
      if (setter.setCollaborativeFlowVisible) setter.setCollaborativeFlowVisible(false);
      if (setter.setTableVisualizationVisible) setter.setTableVisualizationVisible(false);
      break;
    case 'memory':
      // 记忆面板
      if (setter.setCanvasVisible) setter.setCanvasVisible(false);
      if (setter.setCollaborativeFlowVisible) setter.setCollaborativeFlowVisible(false);
      if (setter.setTableVisualizationVisible) setter.setTableVisualizationVisible(false);
      break;
    default:
      // 默认隐藏所有面板
      if (setter.setCanvasVisible) setter.setCanvasVisible(false);
      if (setter.setCollaborativeFlowVisible) setter.setCollaborativeFlowVisible(false);
      if (setter.setTableVisualizationVisible) setter.setTableVisualizationVisible(false);
      break;
  }

  // 结束流程
  return {}
};
