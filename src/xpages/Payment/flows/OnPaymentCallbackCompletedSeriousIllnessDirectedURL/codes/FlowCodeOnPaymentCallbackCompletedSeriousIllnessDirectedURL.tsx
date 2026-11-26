import { flowQueryOrderDetailsBasedOnOrderNumberFacade } from '@/flows/com.horsecoder.pay/QueryOrderDetailsBasedOnOrderNumber';
import { flowUpdateDataIntelligentAccountStatusFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/UpdateDataIntelligentAccountStatus';
import { refreshEmptyLayoutLayoutMemberTypeState } from '@/src/models/EmptyLayout/action';
import { forwardIndexMain } from '@/src/logic/forwards';
import { message } from 'antd';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * orderNumber 订单号
 * selectPaymentMethod 是否选择支付方式
 * paymentCompletionCallback 支付完成回调
 * paymentAccountId 支付账户ID
 */
export interface FlowCodeOnPaymentCallbackCompletedSeriousIllnessDirectedURLParams {
  setter: any;
  dispatch: any;
  orderNumber: any;
  selectPaymentMethod: any;
  paymentCompletionCallback: any;
  paymentAccountId: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnPaymentCallbackCompletedSeriousIllnessDirectedURLResults {
}

/**
 * 已完成支付回调病重定向到url
 * FLOW_NODE_ON_PAYMENT_CALLBACK_COMPLETED_SERIOUS_ILLNESS_DIRECTED_U_R_L
 * 唯一id: Payment/FLOW_CODE_ON_PAYMENT_CALLBACK_COMPLETED_SERIOUS_ILLNESS_DIRECTED_U_R_L
 */
export const flowCodeOnPaymentCallbackCompletedSeriousIllnessDirectedURL = async (params: FlowCodeOnPaymentCallbackCompletedSeriousIllnessDirectedURLParams): Promise<FlowCodeOnPaymentCallbackCompletedSeriousIllnessDirectedURLResults> => {
  // 初始化流程出参
  // 开始流程
  const { dispatch } = params;
  const { orderNumber } = params;
  const { selectPaymentMethod } = params;
  const { paymentCompletionCallback } = params;
  const { paymentAccountId } = params;

  // TODO :要能够重新拿到支付链接，需要修噶后端
  
  // 验证订单号
  if (!orderNumber) {
    message.error('订单号不存在');
    return {};
  }

  // 验证是否选择支付方式
  if (!selectPaymentMethod) {
    message.error('未选择支付方式');
    return {};
  }

  try {
    // 查询订单详情
    const { orderEntity } = await flowQueryOrderDetailsBasedOnOrderNumberFacade({
      orderNumber: orderNumber,
    });

    console.log('[支付回调] 订单详情:', orderEntity);

    // 检查订单状态 (0:已创建/待支付 1:已支付/已完成 2:已取消 3:已提交三方平台 4:已退款)
    if (orderEntity.orderState === 3) {
      // 已提交三方平台，轮询等待支付状态更新（支付宝/微信异步回调可能有延迟）
      message.loading('正在确认支付状态...', 0);
      const startTime = Date.now();
      const maxWait = 30000; // 最多等 30 秒

      while (Date.now() - startTime < maxWait) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // 每 2 秒查一次

        const { orderEntity: updatedOrder } = await flowQueryOrderDetailsBasedOnOrderNumberFacade({
          orderNumber: orderNumber,
        });

        if (updatedOrder.orderState === 1) {
          message.destroy();
          message.success('支付成功');
          // 继续执行后续会员更新逻辑
          Object.assign(orderEntity, updatedOrder);
          break;
        }
        if (updatedOrder.orderState !== 3) {
          message.destroy();
          // 状态变化但不是成功，可能是取消/退款等
          if (updatedOrder.orderState === 2) {
            message.error('订单已取消');
          } else if (updatedOrder.orderState === 4) {
            message.info('订单已退款');
          } else {
            message.error('订单状态异常');
          }
          return {};
        }
      }

      // 超时仍未支付成功
      if (orderEntity.orderState === 3) {
        message.destroy();
        message.warning('暂未收到支付成功通知，请稍后重试');
        return {};
      }
    } else if (orderEntity.orderState === 0) {
      // 待支付
      message.warning('订单待支付，请完成支付');
      return {};
    } else if (orderEntity.orderState === 2) {
      // 已取消
      message.error('订单已取消');
      return {};
    } else if (orderEntity.orderState === 4) {
      // 已退款
      message.info('订单已退款');
      return {};
    } else if (orderEntity.orderState !== 1) {
      // 其他异常状态
      message.error('订单状态异常');
      return {};
    }

    // 支付成功，根据订单类型和产品名称更新会员类型
    if (paymentAccountId) {
      try {
        // 从订单明细中解析产品名称
        let productName = '';
        let memberTypeNum: number | null = null;
        let memberTypeStr = '';

        try {
          const details = typeof orderEntity.orderDetails === 'string'
            ? JSON.parse(orderEntity.orderDetails)
            : orderEntity.orderDetails;
          if (Array.isArray(details) && details.length > 0) {
            productName = details[0].product || '';
          }
        } catch (e) {
          console.warn('[支付回调] 解析订单明细失败:', e);
        }

        // 只有订阅订单 (orderType === 3) 且产品为 Pro 才更新会员类型
        if (orderEntity.orderType === 3 && productName.includes('Pro')) {
          memberTypeNum = 1;
          memberTypeStr = 'Pro';
        }

        if (memberTypeNum !== null && memberTypeStr) {
          // 更新会员信息
          await flowUpdateDataIntelligentAccountStatusFacade({
            userId: paymentAccountId,
            memberAccountBeUpdated: {
              userId: paymentAccountId,
              memberType: memberTypeNum,
            } as any,
          });

          // 更新 Redux 状态
          dispatch(refreshEmptyLayoutLayoutMemberTypeState(memberTypeStr));
          message.success(`您已成为${memberTypeStr}会员`);

          console.log(`[支付回调] 会员类型已更新: ${memberTypeStr}`);
        } else {
          // 非订阅订单（如 Plus 加油包），不更新会员类型
          message.success('Plus加油包支付成功');
          console.log('[支付回调] 非订阅订单，无需更新会员类型，产品:', productName);
        }
      } catch (error) {
        console.error('[支付回调] 更新会员类型失败:', error);
      }
    } else {
      message.error('缺少登录用户信息');
      console.log('[支付回调] 创建支付订单失败:');
      return {}
    }

    // 执行回调
    if (paymentCompletionCallback) {
      paymentCompletionCallback(orderNumber);
    }

    // 跳转到主页
    forwardIndexMain();
  } catch (error) {
    console.error('[支付回调] 查询订单详情失败:', error);
    message.error('查询订单信息失败');
  }
  // 结束流程
  return {}
};
