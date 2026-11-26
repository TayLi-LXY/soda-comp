import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * memberType 会员类型
 */
export interface FlowOnInitializeOrderSelectPageParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  memberType: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeOrderSelectPageResults {
}

/**
 * 初始化订单选择页面
 * @com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_INITIALIZE_ORDER_SELECT_PAGE
 */
export const flowOnInitializeOrderSelectPage = async (params: FlowOnInitializeOrderSelectPageParams): Promise<FlowOnInitializeOrderSelectPageResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_INITIALIZE_ORDER_SELECT_PAGE', { ...params });
};
