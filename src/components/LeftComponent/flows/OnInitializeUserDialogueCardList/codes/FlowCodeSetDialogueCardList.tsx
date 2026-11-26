
/**
 * 入参明细:
 * setter 页面设置器
 * dialogueCardList 对话卡片列表
 */
export interface FlowCodeSetDialogueCardListParams {
  setter: any;
  dialogueCardList: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetDialogueCardListResults {
}

/**
 * 设置数据:对话卡片列表
 * FLOW_NODE_SET_DIALOGUE_CARD_LIST
 * 唯一id: LeftComponent/FLOW_CODE_SET_DIALOGUE_CARD_LIST
 */
export const flowCodeSetDialogueCardList = async (params: FlowCodeSetDialogueCardListParams): Promise<FlowCodeSetDialogueCardListResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dialogueCardList } = params;
  setter.setDialogueCardList(dialogueCardList);
  // 结束流程
  return {}
};
