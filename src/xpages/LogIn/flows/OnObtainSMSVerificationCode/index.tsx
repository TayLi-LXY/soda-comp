import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * verificationCodeLoginForm 验证码登录表单
 */
export interface FlowOnObtainSMSVerificationCodeParams {
  setter: any;
  dispatch: any;
  verificationCodeLoginForm: any;
}

/**
 * 出参明细:
 */
export interface FlowOnObtainSMSVerificationCodeResults {
}

/**
 * 获取短信验证码
 * @com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_OBTAIN_S_M_S_VERIFICATION_CODE
 */
export const flowOnObtainSMSVerificationCode = async (params: FlowOnObtainSMSVerificationCodeParams): Promise<FlowOnObtainSMSVerificationCodeResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_OBTAIN_S_M_S_VERIFICATION_CODE', { ...params });
};
