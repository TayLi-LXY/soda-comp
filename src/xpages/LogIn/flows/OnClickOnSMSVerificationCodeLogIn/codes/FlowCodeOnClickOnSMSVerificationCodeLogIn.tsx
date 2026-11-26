import { message } from "antd";

/**
 * 入参明细:
 * verificationCodeLoginForm 验证码登录表单
 */
export interface FlowCodeOnClickOnSMSVerificationCodeLogInParams {
  verificationCodeLoginForm: any;
}

/**
 * 出参明细:
 * mobilePhoneNumber 手机号
 * captcha 验证码
 */
export interface FlowCodeOnClickOnSMSVerificationCodeLogInResults {
  mobilePhoneNumber: string;
  captcha: string;
}

/**
 * 点击短信验证码登录
 * FLOW_NODE_ON_CLICK_ON_S_M_S_VERIFICATION_CODE_LOG_IN
 * 唯一id: LogIn/FLOW_CODE_ON_CLICK_ON_S_M_S_VERIFICATION_CODE_LOG_IN
 */
export const flowCodeOnClickOnSMSVerificationCodeLogIn = async (params: FlowCodeOnClickOnSMSVerificationCodeLogInParams): Promise<FlowCodeOnClickOnSMSVerificationCodeLogInResults> => {
  // 初始化流程出参
  let mobilePhoneNumber;
  let captcha;
  // 开始流程
  const { verificationCodeLoginForm } = params;

  const values = await verificationCodeLoginForm.validateFields();

  if (!values.mobilePhoneNumber || !values.sMSVerificationCode) {
    message.error('手机号或验证码不能为空');
    throw new Error('手机号或验证码不能为空');
  }
  mobilePhoneNumber = values.mobilePhoneNumber;
  captcha = values.sMSVerificationCode;

  // 结束流程
  return {
    mobilePhoneNumber,
    captcha,
  }
};
