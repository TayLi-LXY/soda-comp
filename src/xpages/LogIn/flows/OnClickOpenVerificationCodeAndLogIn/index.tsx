import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickOpenVerificationCodeAndLogInParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOpenVerificationCodeAndLogInResults {
}

/**
 * 点击打开验证码登录
 * @com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_OPEN_VERIFICATION_CODE_AND_LOG_IN
 */
export const flowOnClickOpenVerificationCodeAndLogIn = async (params: FlowOnClickOpenVerificationCodeAndLogInParams): Promise<FlowOnClickOpenVerificationCodeAndLogInResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_OPEN_VERIFICATION_CODE_AND_LOG_IN', { ...params });
};
