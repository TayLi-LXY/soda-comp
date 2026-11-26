import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 */
export interface FlowOnNewConversationParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
}

/**
 * 出参明细:
 */
export interface FlowOnNewConversationResults {
}

/**
 * 新建对话
 * @com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_NEW_CONVERSATION
 */
export const flowOnNewConversation = async (params: FlowOnNewConversationParams): Promise<FlowOnNewConversationResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_NEW_CONVERSATION', { ...params });
};
