import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * inputContent 输入内容
 * attachmentList 附件列表
 * loggedinUser 登录用户
 * userConversationId 用户对话ID
 * conversationId 对话ID
 */
export interface FlowOnSubmitTaskParams {
  setter: any;
  dispatch: any;
  inputContent: string;
  attachmentList: any[];
  loggedinUser: any;
  userConversationId: any;
  conversationId: any;
}

/**
 * 出参明细:
 */
export interface FlowOnSubmitTaskResults {
}

/**
 * 提交任务
 * @com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_SUBMIT_TASK
 */
export const flowOnSubmitTask = async (params: FlowOnSubmitTaskParams): Promise<FlowOnSubmitTaskResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_SUBMIT_TASK', { ...params });
};
