import { forwardIndexMain } from "@/src/logic/forwards";
import { refreshDialogueComponentUserConversationIdState } from "@/src/models/Dialogue/action";
import { refreshLeftComponentComponentDialogueListRefreshSignalState } from "@/src/models/LeftComponent/action";

/**
 * 入参明细:
 * imUserConversationId IM用户对话ID
 * imConversationId IM会话Id
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeSetSessionURLAndDataParams {
  imUserConversationId: string;
  imConversationId: string;
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetSessionURLAndDataResults {
}

/**
 * 设置会话URL和数据
 * FLOW_NODE_SET_SESSION_U_R_L_AND_DATA
 * 唯一id: LeftComponent/FLOW_CODE_SET_SESSION_U_R_L_AND_DATA
 */
export const flowCodeSetSessionURLAndData = async (params: FlowCodeSetSessionURLAndDataParams): Promise<FlowCodeSetSessionURLAndDataResults> => {
  // 初始化流程出参
  // 开始流程
  const { imUserConversationId } = params;
  const { imConversationId } = params;
  const { setter } = params;
  const { dispatch } = params;

  forwardIndexMain({query: {id: imConversationId}});
  dispatch(refreshDialogueComponentUserConversationIdState(imUserConversationId));
  setter.setIfFirstLogWithoutConversation(false);
  dispatch(refreshLeftComponentComponentDialogueListRefreshSignalState(Math.random().toString()));

  // 结束流程
  return {}
};
