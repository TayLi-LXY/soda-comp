import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * memberType 会员类型
 */
export interface FlowOnClickOpenPromotionalActivitiesParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  memberType: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOpenPromotionalActivitiesResults {
}

/**
 * 点击打开优惠活动
 * @com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_OPEN_PROMOTIONAL_ACTIVITIES
 */
export const flowOnClickOpenPromotionalActivities = async (params: FlowOnClickOpenPromotionalActivitiesParams): Promise<FlowOnClickOpenPromotionalActivitiesResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_OPEN_PROMOTIONAL_ACTIVITIES', { ...params });
};
