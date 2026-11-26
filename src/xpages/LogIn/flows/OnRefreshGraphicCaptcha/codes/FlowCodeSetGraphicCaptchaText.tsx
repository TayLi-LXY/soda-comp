
/**
 * 入参明细:
 * setter 页面设置器
 * graphicCaptchaText 图形验证码文本
 */
export interface FlowCodeSetGraphicCaptchaTextParams {
  setter: any;
  graphicCaptchaText: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetGraphicCaptchaTextResults {
}

/**
 * 设置数据:图形验证码文本
 * FLOW_NODE_SET_GRAPHIC_CAPTCHA_TEXT
 * 唯一id: LogIn/FLOW_CODE_SET_GRAPHIC_CAPTCHA_TEXT
 */
export const flowCodeSetGraphicCaptchaText = async (params: FlowCodeSetGraphicCaptchaTextParams): Promise<FlowCodeSetGraphicCaptchaTextResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { graphicCaptchaText } = params;
  setter.setGraphicCaptchaText(graphicCaptchaText);
  // 结束流程
  return {}
};
