import { forwardIndexMain } from "@/src/logic/forwards";
import { refreshDialogueComponentUserConversationIdState } from "@/src/models/Dialogue/action";

/**
 * 入参明细:
 * imUserConversationId IM用户对话ID
 * imConversationId IM会话Id
 * dispatch WEB状态更新
 * setter 页面设置器
 */
export interface FlowCodeSetGlobalSessionAndURLParams {
  imUserConversationId: string;
  imConversationId: string;
  dispatch: any;
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetGlobalSessionAndURLResults {
}

/**
 * 设置全局会话和url
 * FLOW_NODE_SET_GLOBAL_SESSION_AND_U_R_L
 * 唯一id: LeftComponent/FLOW_CODE_SET_GLOBAL_SESSION_AND_U_R_L
 */
export const flowCodeSetGlobalSessionAndURL = async (params: FlowCodeSetGlobalSessionAndURLParams): Promise<FlowCodeSetGlobalSessionAndURLResults> => {
  // 初始化流程出参
  // 开始流程
  const { imUserConversationId } = params;
  const { imConversationId } = params;
  const { dispatch } = params;
  const { setter } = params;

  forwardIndexMain({query: {id: imConversationId}});
  dispatch(refreshDialogueComponentUserConversationIdState(imUserConversationId));
  setter.setIfFirstLogWithoutConversation(false);

  // 结束流程
  return {}
};
