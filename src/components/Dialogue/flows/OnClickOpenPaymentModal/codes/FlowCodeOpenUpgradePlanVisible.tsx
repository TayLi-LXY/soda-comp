import { refreshMainPageUpgradePlanVisibleState } from '@/xpages/Main/models/action';

/**
 * 入参明细:
 * dispatch 全局设置器
 */
export interface FlowCodeOpenUpgradePlanVisibleParams {
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOpenUpgradePlanVisibleResults {
}

/**
 * 打开升级套餐
 * FLOW_NODE_OPEN_UPGRADE_PLAN_VISIBLE
 * 唯一id: Dialogue/FLOW_CODE_OPEN_UPGRADE_PLAN_VISIBLE
 */
export const flowCodeOpenUpgradePlanVisible = async (params: FlowCodeOpenUpgradePlanVisibleParams): Promise<FlowCodeOpenUpgradePlanVisibleResults> => {
  // 初始化流程出参
  // 开始流程
  const { dispatch } = params;
  dispatch(refreshMainPageUpgradePlanVisibleState(true));
  // 结束流程
  return {}
};
