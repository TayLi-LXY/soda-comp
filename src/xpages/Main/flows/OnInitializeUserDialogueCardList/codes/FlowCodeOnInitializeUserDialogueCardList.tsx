
/**
 * 入参明细:
 * loggedinUser 登录用户
 */
export interface FlowCodeOnInitializeUserDialogueCardListParams {
  loggedinUser: any;
}

/**
 * 出参明细:
 * userIdList 用户ID列表
 * page page
 * rows rows
 */
export interface FlowCodeOnInitializeUserDialogueCardListResults {
  userIdList: string[];
  page: number;
  rows: number;
}

/**
 * 初始化用户对话卡片列表
 * FLOW_NODE_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST
 * 唯一id: Main/FLOW_CODE_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST
 */
export const flowCodeOnInitializeUserDialogueCardList = async (params: FlowCodeOnInitializeUserDialogueCardListParams): Promise<FlowCodeOnInitializeUserDialogueCardListResults> => {
  // 初始化流程出参
  let userIdList;
  let page;
  let rows;
  // 开始流程
  const { loggedinUser } = params;

  userIdList = [loggedinUser.id];
  page = 1;
  rows = 20;

  // 结束流程
  return {
    userIdList,
    page,
    rows,
  }
};
