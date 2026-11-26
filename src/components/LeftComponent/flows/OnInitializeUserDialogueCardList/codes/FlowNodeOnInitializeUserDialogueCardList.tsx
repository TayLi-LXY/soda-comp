
/**
 * 入参明细:
 * loggedinUser 登录用户
 */
export interface FlowNodeOnInitializeUserDialogueCardListParams {
  loggedinUser: any;
}

/**
 * 出参明细:
 * userIdList 用户ID列表
 * page page
 * rows rows
 */
export interface FlowNodeOnInitializeUserDialogueCardListResults {
  userIdList: string[];
  page: number;
  rows: number;
}

/**
 * 初始化用户对话卡片列表
 * FLOW_NODE_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST
 * 唯一id: LeftComponent/FLOW_NODE_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST
 */
export const flowNodeOnInitializeUserDialogueCardList = async (params: FlowNodeOnInitializeUserDialogueCardListParams): Promise<FlowNodeOnInitializeUserDialogueCardListResults> => {
  // 初始化流程出参
  let userIdList;
  let page;
  let rows;
  // 开始流程
  const { loggedinUser } = params;

  userIdList = [loggedinUser.id];
  page = 1;
  rows = 500;

  // 结束流程
  return {
    userIdList,
    page,
    rows,
  }
};
