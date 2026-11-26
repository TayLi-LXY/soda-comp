
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeEnableVisibleControlOfPaymentQRCodeParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeEnableVisibleControlOfPaymentQRCodeResults {
}

/**
 * 设置支付二维码可见控制可见
 * FLOW_NODE_ENABLE_VISIBLE_CONTROL_OF_PAYMENT_Q_R_CODE
 * 唯一id: Payment/FLOW_CODE_ENABLE_VISIBLE_CONTROL_OF_PAYMENT_Q_R_CODE
 */
export const flowCodeEnableVisibleControlOfPaymentQRCode = async (params: FlowCodeEnableVisibleControlOfPaymentQRCodeParams): Promise<FlowCodeEnableVisibleControlOfPaymentQRCodeResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setVisibleControlOfPaymentQRCode(true);
  // 结束流程
  return {}
};
