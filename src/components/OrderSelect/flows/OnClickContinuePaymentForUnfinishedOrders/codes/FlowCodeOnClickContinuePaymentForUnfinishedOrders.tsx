import { forwardPay } from '@/src/logic/forwards';
import { message } from 'antd';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * paymentOrderNumber 支付订单号
 * memberType 会员类型
 * loggedinUser 登录用户
 */
export interface FlowCodeOnClickContinuePaymentForUnfinishedOrdersParams {
  setter: any;
  dispatch: any;
  paymentOrderNumber: any;
  memberType: any;
  loggedinUser: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickContinuePaymentForUnfinishedOrdersResults {
}

/**
 * 点击继续支付未完成订单
 * FLOW_NODE_ON_CLICK_CONTINUE_PAYMENT_FOR_UNFINISHED_ORDERS
 * 唯一id: OrderSelect/FLOW_CODE_ON_CLICK_CONTINUE_PAYMENT_FOR_UNFINISHED_ORDERS
 */
export const flowCodeOnClickContinuePaymentForUnfinishedOrders = async (params: FlowCodeOnClickContinuePaymentForUnfinishedOrdersParams): Promise<FlowCodeOnClickContinuePaymentForUnfinishedOrdersResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { paymentOrderNumber } = params;
  const { memberType } = params;
  const { loggedinUser } = params;

  // 1. 校验用户是否已登录
  if (!loggedinUser || !loggedinUser.id) {
    message.error('账户未登录，请先登录');
    return {};
  }

  // 2. 校验支付订单号是否存在
  if (!paymentOrderNumber) {
    message.error('订单号不存在，请重新创建订单');
    return {};
  }

  // 3. 跳转到支付页面，携带订单号和用户 ID
  forwardPay({
    query: {
      orderNumber: paymentOrderNumber,
      userId: loggedinUser.id,
    },
  });
  message.success('正在跳转到支付页面...');

  // 结束流程
  return {}
};
