import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * leftSideDialogVisibleControl 左侧对话框可见控制
 * topMenuVisibleControls 顶部菜单可见控制
 * addDialogueVisibleControl 新增对话可见控制
 */
export interface FlowOnClickOnAddDialogueItemParams {
  setter: any;
  dispatch: any;
  leftSideDialogVisibleControl: any;
  topMenuVisibleControls: any;
  addDialogueVisibleControl: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOnAddDialogueItemResults {
}

/**
 * 点击新增对话项目
 * @com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_CLICK_ON_ADD_DIALOGUE_ITEM
 */
export const flowOnClickOnAddDialogueItem = async (params: FlowOnClickOnAddDialogueItemParams): Promise<FlowOnClickOnAddDialogueItemResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_CLICK_ON_ADD_DIALOGUE_ITEM', { ...params });
};
