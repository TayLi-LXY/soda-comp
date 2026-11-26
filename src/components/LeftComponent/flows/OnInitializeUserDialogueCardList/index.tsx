import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * conversationId 对话ID
 * loggedinUser 登录用户
 */
export interface FlowOnInitializeUserDialogueCardListParams {
  setter: any;
  dispatch: any;
  conversationId: any;
  loggedinUser: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeUserDialogueCardListResults {
}

/**
 * 初始化用户对话卡片列表
 * @com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST
 */
export const flowOnInitializeUserDialogueCardList = async (params: FlowOnInitializeUserDialogueCardListParams): Promise<FlowOnInitializeUserDialogueCardListResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST', { ...params });
};
