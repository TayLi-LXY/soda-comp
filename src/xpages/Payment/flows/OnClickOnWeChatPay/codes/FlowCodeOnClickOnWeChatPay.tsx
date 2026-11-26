import { flowPayOrderAndPerformRealTimeLiquidationFacade } from '@/flows/com.horsecoder.pay/PayOrderAndPerformRealTimeLiquidation';
import { message } from "antd";
import weChatPayment from '@/assets/weChatPay.png';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * orderNumber 订单号
 * paymentAccountId 支付账户ID
 */
export interface FlowCodeOnClickOnWeChatPayParams {
  setter: any;
  dispatch: any;
  orderNumber: any;
  paymentAccountId: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickOnWeChatPayResults {
}

/**
 * 点击微信支付
 * FLOW_NODE_ON_CLICK_ON_WE_CHAT_PAY
 * 唯一id: Payment/FLOW_CODE_ON_CLICK_ON_WE_CHAT_PAY
 */
export const flowCodeOnClickOnWeChatPay = async (params: FlowCodeOnClickOnWeChatPayParams): Promise<FlowCodeOnClickOnWeChatPayResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { orderNumber } = params;
  const { paymentAccountId } = params;

  // 验证支付账户
  if (!paymentAccountId) {
    message.error('账户未登录');
    return {};
  }

  // 验证订单号
  if (!orderNumber) {
    message.error('订单号不存在');
    return {};
  }

  try {
    // 设置支付方式
    setter.setPaymentReminder('请使用微信支付');
    setter.setSelectPaymentMethod(true);

    // 清空二维码内容，触发加载动画
    setter.setPaymentQRCodeCodeContent('');

    // 调用支付流程获取二维码 URL
    const { qRCodeLink } = await flowPayOrderAndPerformRealTimeLiquidationFacade({
      paymentType: 0, // 0 = 微信支付
      paymentOrderNumber: orderNumber,
      accountId: paymentAccountId,
    });

    // 统一渲染二维码（支付 / 签约均为 HTTPS URL）
    if (qRCodeLink) {
      setter.setPaymentQRCodeCodeContent(qRCodeLink);
      setter.setPaymentQRCodeLogoImage(weChatPayment);
      setter.setVisibleControlOfPaymentQRCode(true);
    }
  } catch (error: any) {
    const errorMsg = error?.message || error?.toString() || '';
    if (errorMsg.includes('订单状态异常')) {
      message.error('订单状态异常，可能已支付或已取消，请返回重新下单');
    } else if (errorMsg.includes('订单不存在')) {
      message.error('订单不存在，请重新创建订单');
    } else if (errorMsg.includes('账户')) {
      message.error('账户异常，请重新登录');
    } else {
      message.error('生成支付二维码失败，请稍后重试');
    }
    console.error('[微信支付] 初始化失败:', error);
  }

  // 结束流程
  return {}
};
