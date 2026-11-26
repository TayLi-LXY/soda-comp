import { forwardPay } from "@/src/logic/forwards";
import { message } from "antd";

/**
 * 入参明细:
 * paymentOrderNumber 支付订单号
 * loggedinUser 登录用户
 */
export interface FlowCodeJumpDirectPaymentPageParams {
  paymentOrderNumber: string;
  loggedinUser: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeJumpDirectPaymentPageResults {
}

/**
 * 跳转到直接支付页面
 * FLOW_NODE_JUMP_DIRECT_PAYMENT_PAGE
 * 唯一id: OrderSelect/FLOW_CODE_JUMP_DIRECT_PAYMENT_PAGE
 */
export const flowCodeJumpDirectPaymentPage = async (params: FlowCodeJumpDirectPaymentPageParams): Promise<FlowCodeJumpDirectPaymentPageResults> => {
  // 初始化流程出参
  // 开始流程
  const { paymentOrderNumber } = params;
  const { loggedinUser } = params;

  // 跳转到支付页面，携带订单号和用户信息
  forwardPay({
    query: {
      orderNumber: paymentOrderNumber,
      userId: loggedinUser?.id,
    },
  });
  message.success('订单创建成功，跳转到支付页面......');
  // 结束流程
  return {}
};
