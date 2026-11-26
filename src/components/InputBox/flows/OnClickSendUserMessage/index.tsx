import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * setter 页面设置器
 * selectedllm 选择的大模型
 * userUploadedFileList 用户上传文件列表
 * inputContent 输入内容
 * conversationId 对话ID
 * userConversationId 用户对话ID
 * loggedinUser 登录用户
 */
export interface FlowOnClickSendUserMessageParams {
  dispatch: any;
  setter: any;
  selectedllm: any;
  userUploadedFileList: any;
  inputContent: any;
  conversationId: any;
  userConversationId: any;
  loggedinUser: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickSendUserMessageResults {
}

/**
 * 点击发送用户消息
 * @com.horsecoder.platform.mall.umi.chat/inputBox/FLOW_ON_CLICK_SEND_USER_MESSAGE
 */
export const flowOnClickSendUserMessage = async (params: FlowOnClickSendUserMessageParams): Promise<FlowOnClickSendUserMessageResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/inputBox/FLOW_ON_CLICK_SEND_USER_MESSAGE', { ...params });
};
