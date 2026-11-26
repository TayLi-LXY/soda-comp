import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 */
export interface FlowOnUpgradePlanCancelParams {
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnUpgradePlanCancelResults {
}

/**
 * 关闭升级套餐
 * @com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_UPGRADE_PLAN_CANCEL
 */
export const flowOnUpgradePlanCancel = async (params: FlowOnUpgradePlanCancelParams): Promise<FlowOnUpgradePlanCancelResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_UPGRADE_PLAN_CANCEL', { ...params });
};
