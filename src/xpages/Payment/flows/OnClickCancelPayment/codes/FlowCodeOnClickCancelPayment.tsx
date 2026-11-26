import { flowCancelPaymentOrderFacade } from '@/flows/com.horsecoder.pay/CancelPaymentOrder';
import { message } from 'antd';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * orderNumber 订单号
 * paymentAccountId 支付账户ID
 */
export interface FlowCodeOnClickCancelPaymentParams {
  dispatch: any;
  orderNumber: any;
  paymentAccountId: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickCancelPaymentResults {
}

/**
 * 点击取消支付
 * FLOW_NODE_ON_CLICK_CANCEL_PAYMENT
 * 唯一id: Payment/FLOW_CODE_ON_CLICK_CANCEL_PAYMENT
 */
export const flowCodeOnClickCancelPayment = async (params: FlowCodeOnClickCancelPaymentParams): Promise<FlowCodeOnClickCancelPaymentResults> => {
  // 初始化流程出参
  // 开始流程
  const { dispatch } = params;
  const { orderNumber } = params;
  const { paymentAccountId } = params;

  // 验证订单号
  if (!orderNumber) {
    message.error('订单号不存在');
    return {};
  }

  try {
    // 调用取消订单接口
    await flowCancelPaymentOrderFacade({
      paymentOrderNumber: orderNumber,
      accountId: paymentAccountId,
    });

    message.info('订单已取消');

    // 返回订单选择页
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  } catch (error) {
    console.error('[取消支付] 取消订单失败:', error);
    message.error('取消订单失败，请稍后重试');
  }
  // 结束流程
  return {};
};
