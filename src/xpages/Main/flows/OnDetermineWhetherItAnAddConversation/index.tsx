import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnDetermineWhetherItAnAddConversationParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnDetermineWhetherItAnAddConversationResults {
}

/**
 * 判断是否为新增对话
 * @com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_DETERMINE_WHETHER_IT_AN_ADD_CONVERSATION
 */
export const flowOnDetermineWhetherItAnAddConversation = async (params: FlowOnDetermineWhetherItAnAddConversationParams): Promise<FlowOnDetermineWhetherItAnAddConversationResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_DETERMINE_WHETHER_IT_AN_ADD_CONVERSATION', { ...params });
};
