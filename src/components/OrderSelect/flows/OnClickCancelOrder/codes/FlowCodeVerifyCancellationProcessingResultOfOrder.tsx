
import { message } from 'antd';

/**
 * cancelResult 取消结果
 */
export interface FlowCodeVerifyCancellationProcessingResultOfOrderParams {
  cancelResult: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeVerifyCancellationProcessingResultOfOrderResults {
}

/**
 * 验证订单取消处理结果
 * FLOW_NODE_VERIFY_CANCELLATION_PROCESSING_RESULT_OF_ORDER
 * 唯一id: OrderSelect/FLOW_CODE_VERIFY_CANCELLATION_PROCESSING_RESULT_OF_ORDER
 */
export const flowCodeVerifyCancellationProcessingResultOfOrder = async (params: FlowCodeVerifyCancellationProcessingResultOfOrderParams): Promise<FlowCodeVerifyCancellationProcessingResultOfOrderResults> => {
  // 初始化流程出参
  // 开始流程
  const { cancelResult } = params;

  if (cancelResult) {
    message.success('订单已取消');
  }

  // 结束流程
  return {}
};
