
/**
 * 入参明细:
 * setter 页面设置器
 * graphicCaptchaBaseImage 图形验证码base64
 */
export interface FlowCodeSetGraphicCaptchaBaseImageParams {
  setter: any;
  graphicCaptchaBaseImage: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetGraphicCaptchaBaseImageResults {
}

/**
 * 设置数据:图形验证码base64
 * FLOW_NODE_SET_GRAPHIC_CAPTCHA_BASE_IMAGE
 * 唯一id: LogIn/FLOW_CODE_SET_GRAPHIC_CAPTCHA_BASE_IMAGE
 */
export const flowCodeSetGraphicCaptchaBaseImage = async (params: FlowCodeSetGraphicCaptchaBaseImageParams): Promise<FlowCodeSetGraphicCaptchaBaseImageResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { graphicCaptchaBaseImage } = params;
  setter.setGraphicCaptchaBaseImage(graphicCaptchaBaseImage);
  // 结束流程
  return {}
};
