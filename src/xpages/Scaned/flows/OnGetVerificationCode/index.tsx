import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * registrationMobileVerificationForm 注册手机验证表单
 */
export interface FlowOnGetVerificationCodeParams {
  setter: any;
  dispatch: any;
  registrationMobileVerificationForm: any;
}

/**
 * 出参明细:
 */
export interface FlowOnGetVerificationCodeResults {
}

/**
 * 获取验证码
 * @com.horsecoder.platform.mall.umi.chat/scaned/FLOW_ON_GET_VERIFICATION_CODE
 */
export const flowOnGetVerificationCode = async (params: FlowOnGetVerificationCodeParams): Promise<FlowOnGetVerificationCodeResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/scaned/FLOW_ON_GET_VERIFICATION_CODE', { ...params });
};
