import { flowQueryOrderDetailsBasedOnOrderNumberFacade } from '@/flows/com.horsecoder.pay/QueryOrderDetailsBasedOnOrderNumber';
import { flowPayOrderAndPerformRealTimeLiquidationFacade } from '@/flows/com.horsecoder.pay/PayOrderAndPerformRealTimeLiquidation';
import { forwardIndexMain } from '@/src/logic/forwards';
import { message } from 'antd';
import weChatPayment from '@/assets/weChatPay.png';
import alipayLogo from '@/assets/alipay.png';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * orderNumber 订单号
 * paymentAccountId 支付账户ID
 */
export interface FlowCodeOnInitializeWeChatPayOrderParams {
  setter: any;
  dispatch: any;
  orderNumber: any;
  paymentAccountId: any;
}

/**
 * 出参明细:
 * orderNumber 订单号
 * productCode 产品编码
 */
export interface FlowCodeOnInitializeWeChatPayOrderResults {
  orderNumber: any;
  productCode: string;
}

/**
 * 初始化支付订单
 * FLOW_NODE_ON_INITIALIZE_WE_CHAT_PAY_ORDER
 * 唯一id: Payment/FLOW_CODE_ON_INITIALIZE_WE_CHAT_PAY_ORDER
 */
export const flowCodeOnInitializeWeChatPayOrder = async (params: FlowCodeOnInitializeWeChatPayOrderParams): Promise<FlowCodeOnInitializeWeChatPayOrderResults> => {
  // 初始化流程出参
  let orderNumber;
  let productCode = '';
  // 开始流程
  const { setter } = params;
  const { orderNumber: orderNumberFromParams } = params;
  const { paymentAccountId } = params;

  // 验证订单号
  if (!orderNumberFromParams) {
    message.error('订单号不存在');
    return { orderNumber: '', productCode: '' };
  }

  orderNumber = orderNumberFromParams;

  try {
    // 查询订单当前状态
    const { orderEntity } = await flowQueryOrderDetailsBasedOnOrderNumberFacade({
      orderNumber: orderNumberFromParams,
    });

    console.log('[初始化支付] 订单详情:', orderEntity);

    // 优先从订单明细中解析产品编码（在所有状态分支前，保证后续节点能拿到 productCode）
    try {
      const details = typeof orderEntity.orderDetails === 'string'
        ? JSON.parse(orderEntity.orderDetails)
        : orderEntity.orderDetails;
      if (Array.isArray(details) && details.length > 0) {
        const productName = details[0].product;
        if (productName?.includes('Pro')) {
          productCode = 'Pro';
        } else if (productName?.includes('Plus')) {
          productCode = 'Plus';
        }
        console.log('[初始化支付] 产品名称:', productName, ', 产品编码:', productCode);
      }
    } catch (e) {
      console.warn('[初始化支付] 解析订单明细失败:', e);
    }

    // 订单状态(0:已创建/待支付 1:已支付/已完成 2:已取消 3:已提交三方平台 4:已退款)
    if (orderEntity.orderState === 1) {
      message.success('支付已完成');
      forwardIndexMain();
      return { orderNumber, productCode };
    }

    if (orderEntity.orderState === 2) {
      message.error('订单已取消');
      if (typeof window !== 'undefined') {
        window.history.back();
      }
      return { orderNumber, productCode };
    }

    if (orderEntity.orderState === 4) {
      message.info('订单已退款');
      if (typeof window !== 'undefined') {
        window.history.back();
      }
      return { orderNumber, productCode };
    }

    // 已提交三方平台(3)：二维码已生成过，无法再次获取
    if (orderEntity.orderState === 3) {
      return { orderNumber, productCode };
    }

    if (orderEntity.orderState !== 0) {
      message.error('订单状态异常');
      return { orderNumber, productCode };
    }

    // 待支付(0)：
    // 有 payType → 说明已选择过支付方式，重新生成二维码
    if (orderEntity.payType !== undefined && orderEntity.payType !== null) {
      const { qRCodeLink } = await flowPayOrderAndPerformRealTimeLiquidationFacade({
        paymentType: orderEntity.payType,
        paymentOrderNumber: orderNumberFromParams,
        accountId: paymentAccountId,
      });
      console.log('[初始化支付] 重新生成二维码:', qRCodeLink);

      // 统一渲染二维码（支付 / 签约均为 HTTPS URL）
      if (qRCodeLink) {
        setter.setPaymentQRCodeCodeContent(qRCodeLink);
        setter.setPaymentQRCodeLogoImage(orderEntity.payType === 0 ? weChatPayment : alipayLogo);
        setter.setVisibleControlOfPaymentQRCode(true);
      }
      setter.setPaymentReminder(orderEntity.payType === 0 ? '请使用微信支付' : '请使用支付宝支付');
    }
    // 无 payType → 不预生成二维码，由用户选择支付方式后再生成
  } catch (error) {
    console.error('[初始化支付] 查询订单或生成二维码失败:', error);
    message.error('初始化支付失败，请稍后重试');
  }

  // 结束流程
  return {
    orderNumber,
    productCode,
  }
};
