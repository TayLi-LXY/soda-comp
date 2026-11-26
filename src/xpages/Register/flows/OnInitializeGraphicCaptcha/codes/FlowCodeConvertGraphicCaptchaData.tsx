
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
 * graphicalVerificationCode 图形验证码
 * graphicCaptchaImage 图形验证码base64
 */
export interface FlowCodeConvertGraphicCaptchaDataResults {
  graphicalVerificationCode: any;
  graphicCaptchaImage: any;
}

/**
 * 转化图形验证码数据
 * FLOW_NODE_CONVERT_GRAPHIC_CAPTCHA_DATA
 * 唯一id: Register/FLOW_CODE_CONVERT_GRAPHIC_CAPTCHA_DATA
 */
export const flowCodeConvertGraphicCaptchaData = async (params: FlowCodeConvertGraphicCaptchaDataParams): Promise<FlowCodeConvertGraphicCaptchaDataResults> => {
  // 初始化流程出参
  let graphicalVerificationCode;
  let graphicCaptchaImage;
  // 开始流程
  const { imageBase64 } = params;
  const { verificationCodeText } = params;

  graphicalVerificationCode = verificationCodeText;
  graphicCaptchaImage = imageBase64;

  // 结束流程
  return {
    graphicalVerificationCode,
    graphicCaptchaImage,
  }
};
