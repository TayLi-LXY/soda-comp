import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userSubscriptionId 用户订阅ID
 * paymentRecordId 支付记录ID
 */
export interface FlowWeChatEntrustedWithholdingExecutionParams {
  userSubscriptionId: string;
  paymentRecordId: string;
}

/**
 * 出参明细:
 * processingResult 处理结果
 * orderNumber 订单号
 */
export interface FlowWeChatEntrustedWithholdingExecutionResults {
  processingResult?: string;
  orderNumber: string;
}

/**
 * 微信委托代扣执行
 * @com.horsecoder.pay/FLOW_WE_CHAT_ENTRUSTED_WITHHOLDING_EXECUTION
 */
export const flowWeChatEntrustedWithholdingExecution = async (params: FlowWeChatEntrustedWithholdingExecutionParams): StandardPromise<FlowWeChatEntrustedWithholdingExecutionResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_WE_CHAT_ENTRUSTED_WITHHOLDING_EXECUTION',
      params: { ...params },
    },
  });
};


export const flowWeChatEntrustedWithholdingExecutionFacade = async (params: FlowWeChatEntrustedWithholdingExecutionParams): Promise<FlowWeChatEntrustedWithholdingExecutionResults> => {
  const { data: { value } } =  await flowWeChatEntrustedWithholdingExecution(params);
  return value;
};