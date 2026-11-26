import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickDisplayAccountLoginParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickDisplayAccountLoginResults {
}

/**
 * 点击显示账号登录
 * @com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_DISPLAY_ACCOUNT_LOGIN
 */
export const flowOnClickDisplayAccountLogin = async (params: FlowOnClickDisplayAccountLoginParams): Promise<FlowOnClickDisplayAccountLoginResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_DISPLAY_ACCOUNT_LOGIN', { ...params });
};
