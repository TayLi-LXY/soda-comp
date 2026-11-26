/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * leftSideDialogVisibleControl 左侧对话框可见控制
 * topMenuVisibleControls 顶部菜单可见控制
 * addDialogueVisibleControl 新增对话可见控制
 */
export interface FlowCodeOnClickOnAddDialogueItemParams {
  setter: any;
  dispatch: any;
  leftSideDialogVisibleControl: any;
  topMenuVisibleControls: any;
  addDialogueVisibleControl: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickOnAddDialogueItemResults {
}

/**
 * 点击新增对话项目
 * FLOW_NODE_ON_CLICK_ON_ADD_DIALOGUE_ITEM
 * 唯一id: Main/FLOW_CODE_ON_CLICK_ON_ADD_DIALOGUE_ITEM
 */
export const flowCodeOnClickOnAddDialogueItem = async (params: FlowCodeOnClickOnAddDialogueItemParams): Promise<FlowCodeOnClickOnAddDialogueItemResults> => {
  // 初始化流程出参
  const { setter, addDialogueVisibleControl } = params;

  // 点击新增：隐藏左侧和顶部，显示新增对话表单
  setter.setLeftSideDialogVisibleControl(false);
  setter.setTopMenuVisibleControls(false);
  setter.setAddDialogueVisibleControl(true);

  // 结束流程
  return {}
};
