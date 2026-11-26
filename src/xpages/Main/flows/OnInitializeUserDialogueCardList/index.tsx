import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * conversationId 对话ID
 */
export interface FlowOnInitializeUserDialogueCardListParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  conversationId: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeUserDialogueCardListResults {
}

/**
 * 初始化用户对话卡片列表
 * @com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST
 */
export const flowOnInitializeUserDialogueCardList = async (params: FlowOnInitializeUserDialogueCardListParams): Promise<FlowOnInitializeUserDialogueCardListResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST', { ...params });
};
