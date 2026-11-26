import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * memberType 会员类型
 */
export interface FlowOnClickJumpPaymentPageParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  memberType: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickJumpPaymentPageResults {
}

/**
 * 点击跳转到支付页
 * @com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_JUMP_PAYMENT_PAGE
 */
export const flowOnClickJumpPaymentPage = async (params: FlowOnClickJumpPaymentPageParams): Promise<FlowOnClickJumpPaymentPageResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_JUMP_PAYMENT_PAGE', { ...params });
};
