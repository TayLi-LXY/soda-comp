import { refreshMainPageUpgradePlanVisibleState } from "@/src/xpages/Main/models/action";

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnClickOpenPromotionalActivitiesParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickOpenPromotionalActivitiesResults {
}

/**
 * 点击打开优惠活动
 * FLOW_NODE_ON_CLICK_OPEN_PROMOTIONAL_ACTIVITIES
 * 唯一id: LeftComponent/FLOW_CODE_ON_CLICK_OPEN_PROMOTIONAL_ACTIVITIES
 */
export const flowCodeOnClickOpenPromotionalActivities = async (params: FlowCodeOnClickOpenPromotionalActivitiesParams): Promise<FlowCodeOnClickOpenPromotionalActivitiesResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
   dispatch(refreshMainPageUpgradePlanVisibleState(true));
  // 结束流程
  return {}
};
