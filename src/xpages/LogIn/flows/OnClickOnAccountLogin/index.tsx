import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loginForm 登录表单
 * graphicCaptchaText 图形验证码文本
 */
export interface FlowOnClickOnAccountLoginParams {
  setter: any;
  dispatch: any;
  loginForm: any;
  graphicCaptchaText: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOnAccountLoginResults {
}

/**
 * 点击账号登录
 * @com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_ON_ACCOUNT_LOGIN
 */
export const flowOnClickOnAccountLogin = async (params: FlowOnClickOnAccountLoginParams): Promise<FlowOnClickOnAccountLoginResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_ON_ACCOUNT_LOGIN', { ...params });
};
