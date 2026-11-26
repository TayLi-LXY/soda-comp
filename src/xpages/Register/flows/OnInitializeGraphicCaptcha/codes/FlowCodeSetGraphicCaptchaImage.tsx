
/**
 * 入参明细:
 * setter 页面设置器
 * graphicCaptchaImage 图形验证码base64
 */
export interface FlowCodeSetGraphicCaptchaImageParams {
  setter: any;
  graphicCaptchaImage: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetGraphicCaptchaImageResults {
}

/**
 * 设置数据:图形验证码base64
 * FLOW_NODE_SET_GRAPHIC_CAPTCHA_IMAGE
 * 唯一id: Register/FLOW_CODE_SET_GRAPHIC_CAPTCHA_IMAGE
 */
export const flowCodeSetGraphicCaptchaImage = async (params: FlowCodeSetGraphicCaptchaImageParams): Promise<FlowCodeSetGraphicCaptchaImageResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { graphicCaptchaImage } = params;
  setter.setGraphicCaptchaImage(graphicCaptchaImage);
  // 结束流程
  return {}
};
