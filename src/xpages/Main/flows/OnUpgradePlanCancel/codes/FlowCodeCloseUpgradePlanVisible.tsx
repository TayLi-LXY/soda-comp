import { refreshMainPageUpgradePlanVisibleState } from '@/xpages/Main/models/action';

/**
 * 入参明细:
 * dispatch 全局设置器
 */
export interface FlowCodeCloseUpgradePlanVisibleParams {
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeCloseUpgradePlanVisibleResults {
}

/**
 * 关闭升级套餐
 * FLOW_NODE_CLOSE_UPGRADE_PLAN_VISIBLE
 * 唯一id: Main/FLOW_CODE_CLOSE_UPGRADE_PLAN_VISIBLE
 */
export const flowCodeCloseUpgradePlanVisible = async (params: FlowCodeCloseUpgradePlanVisibleParams): Promise<FlowCodeCloseUpgradePlanVisibleResults> => {
  // 初始化流程出参
  // 开始流程
  const { dispatch } = params;
  dispatch(refreshMainPageUpgradePlanVisibleState(false));
  // 结束流程
  return {}
};
