import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * verificationCodeLoginForm 验证码登录表单
 */
export interface FlowOnClickOnSMSVerificationCodeLogInParams {
  setter: any;
  dispatch: any;
  verificationCodeLoginForm: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOnSMSVerificationCodeLogInResults {
}

/**
 * 点击短信验证码登录
 * @com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_ON_S_M_S_VERIFICATION_CODE_LOG_IN
 */
export const flowOnClickOnSMSVerificationCodeLogIn = async (params: FlowOnClickOnSMSVerificationCodeLogInParams): Promise<FlowOnClickOnSMSVerificationCodeLogInResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_ON_S_M_S_VERIFICATION_CODE_LOG_IN', { ...params });
};
