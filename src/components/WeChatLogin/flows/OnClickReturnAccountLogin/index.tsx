import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickReturnAccountLoginParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickReturnAccountLoginResults {
}

/**
 * 点击返回账号登录
 * @com.horsecoder.platform.mall.umi.chat/weChatLogin/FLOW_ON_CLICK_RETURN_ACCOUNT_LOGIN
 */
export const flowOnClickReturnAccountLogin = async (params: FlowOnClickReturnAccountLoginParams): Promise<FlowOnClickReturnAccountLoginResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/weChatLogin/FLOW_ON_CLICK_RETURN_ACCOUNT_LOGIN', { ...params });
};
