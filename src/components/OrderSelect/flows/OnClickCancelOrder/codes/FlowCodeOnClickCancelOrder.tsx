
import { flowCancelPaymentOrderFacade } from '@/flows/com.horsecoder.pay/CancelPaymentOrder';
import { message } from 'antd';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * paymentOrderNumber 支付订单号
 */
export interface FlowCodeOnClickCancelOrderParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  paymentOrderNumber: any;
}

/**
 * 出参明细:
 * paymentOrderNumber 支付订单号
 * accountId 账户ID
 */
export interface FlowCodeOnClickCancelOrderResults {
  paymentOrderNumber: string;
  accountId: string;
}

/**
 * 点击取消订单
 * FLOW_NODE_ON_CLICK_CANCEL_ORDER
 * 唯一id: OrderSelect/FLOW_CODE_ON_CLICK_CANCEL_ORDER
 */
export const flowCodeOnClickCancelOrder = async (params: FlowCodeOnClickCancelOrderParams): Promise<FlowCodeOnClickCancelOrderResults> => {
  // 初始化流程出参
  let paymentOrderNumber;
  let accountId;
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { loggedinUser } = params;
  const { paymentOrderNumber: orderNumber } = params;

  // 验证登录用户
  if (!loggedinUser || !loggedinUser.id) {
    message.error('登录用户不存在');
    return { paymentOrderNumber, accountId };
  }

  // 验证订单号
  if (!orderNumber) {
    message.error('订单号不存在');
    return { paymentOrderNumber, accountId };
  }

  // 设置账户ID
  accountId = loggedinUser.id;
  paymentOrderNumber = orderNumber;

  // 结束流程
  return {
    paymentOrderNumber,
    accountId,
  }
};
