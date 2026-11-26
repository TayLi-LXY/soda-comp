import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * code 微信code
 */
export interface FlowOnObtainWeChatUserInformationParams {
  setter: any;
  dispatch: any;
  code: any;
}

/**
 * 出参明细:
 */
export interface FlowOnObtainWeChatUserInformationResults {
}

/**
 * 获取微信用户信息
 * @com.horsecoder.platform.mall.umi.chat/scaned/FLOW_ON_OBTAIN_WE_CHAT_USER_INFORMATION
 */
export const flowOnObtainWeChatUserInformation = async (params: FlowOnObtainWeChatUserInformationParams): Promise<FlowOnObtainWeChatUserInformationResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/scaned/FLOW_ON_OBTAIN_WE_CHAT_USER_INFORMATION', { ...params });
};
