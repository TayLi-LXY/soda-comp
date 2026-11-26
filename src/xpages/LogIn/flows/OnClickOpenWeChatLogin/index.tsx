import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickOpenWeChatLoginParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOpenWeChatLoginResults {
}

/**
 * 点击打开微信登录
 * @com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_OPEN_WE_CHAT_LOGIN
 */
export const flowOnClickOpenWeChatLogin = async (params: FlowOnClickOpenWeChatLoginParams): Promise<FlowOnClickOpenWeChatLoginResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_OPEN_WE_CHAT_LOGIN', { ...params });
};
