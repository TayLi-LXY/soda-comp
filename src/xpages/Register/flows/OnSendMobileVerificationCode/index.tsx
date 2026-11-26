import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * graphicalVerificationCode 图形验证码
 * registrationMobileVerificationForm 注册手机验证表单
 */
export interface FlowOnSendMobileVerificationCodeParams {
  setter: any;
  dispatch: any;
  graphicalVerificationCode: any;
  registrationMobileVerificationForm: any;
}

/**
 * 出参明细:
 */
export interface FlowOnSendMobileVerificationCodeResults {
}

/**
 * 发送手机验证码
 * @com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_SEND_MOBILE_VERIFICATION_CODE
 */
export const flowOnSendMobileVerificationCode = async (params: FlowOnSendMobileVerificationCodeParams): Promise<FlowOnSendMobileVerificationCodeResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_SEND_MOBILE_VERIFICATION_CODE', { ...params });
};
