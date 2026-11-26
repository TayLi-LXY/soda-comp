
/**
 * 入参明细:
 * imageBase64 图片base64
 * verificationCodeText 验证码文本
 */
export interface FlowCodeConvertGraphicCaptchaDataParams {
  imageBase64: string;
  verificationCodeText: string;
}

/**
 * 出参明细:
 * graphicCaptchaBaseImage 图形验证码base64
 * graphicCaptchaText 图形验证码文本
 */
export interface FlowCodeConvertGraphicCaptchaDataResults {
  graphicCaptchaBaseImage: any;
  graphicCaptchaText: any;
}

/**
 * 转换图形验证码数据
 * FLOW_NODE_CONVERT_GRAPHIC_CAPTCHA_DATA
 * 唯一id: LogIn/FLOW_CODE_CONVERT_GRAPHIC_CAPTCHA_DATA
 */
export const flowCodeConvertGraphicCaptchaData = async (params: FlowCodeConvertGraphicCaptchaDataParams): Promise<FlowCodeConvertGraphicCaptchaDataResults> => {
  // 初始化流程出参
  let graphicCaptchaBaseImage;
  let graphicCaptchaText;
  // 开始流程
  const { imageBase64 } = params;
  const { verificationCodeText } = params;

  graphicCaptchaText = verificationCodeText;
  graphicCaptchaBaseImage = imageBase64;

  // 结束流程
  return {
    graphicCaptchaBaseImage,
    graphicCaptchaText,
  }
};
