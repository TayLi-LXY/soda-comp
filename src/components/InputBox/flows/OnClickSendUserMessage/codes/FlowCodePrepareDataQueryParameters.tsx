import type { DataFile } from '@/flows/com.horsecoder.platform.mall.dialogue/IntelligentDataQuery/types/DataFile';
import { message } from 'antd';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * userUploadedFileList 用户上传文件列表
 * inputContent 输入内容
 * selectedllm 选择的大模型
 * loggedinUser 登录用户
 * setter 页面设置器
 */
export interface FlowCodePrepareDataQueryParametersParams {
  dispatch: any;
  userUploadedFileList: any;
  inputContent: any;
  selectedllm: any;
  loggedinUser: any;
  setter: any;
}

/**
 * 出参明细:
 * task 任务
 * fileList 文件列表
 * userConversationId 用户对话ID
 * senderId 发送者ID
 */
export interface FlowCodePrepareDataQueryParametersResults {
  task: string;
  fileList: DataFile[];
  userConversationId?: string;
  senderId: string;
}

/**
 * 准备数据查询参数
 * FLOW_NODE_PREPARE_DATA_QUERY_PARAMETERS
 * 唯一id: InputBox/FLOW_CODE_PREPARE_DATA_QUERY_PARAMETERS
 */
export const flowCodePrepareDataQueryParameters = async (params: FlowCodePrepareDataQueryParametersParams): Promise<FlowCodePrepareDataQueryParametersResults> => {
  // 初始化流程出参
  let task;
  let fileList;
  let userConversationId;
  let senderId;
  // 开始流程
  const { dispatch } = params;
  const { userUploadedFileList } = params;
  const { inputContent } = params;
  const { selectedllm } = params;
  const { loggedinUser } = params;
  const { setter } = params;

  if (!inputContent) {
    message.error('请输入问题');
    throw new Error('问题为空');
  }
  task = inputContent;
  fileList = (userUploadedFileList && userUploadedFileList.length > 0) ? userUploadedFileList : [
    {
      filename: "Patient.json",
      fileSize: "1kb",
      fileType: "json",
      fileUrl: "OUZFOTEwMUM1MzZFMTEzOTA0QjQyOTFBOUE4N0U2NjUuanNvbg=="
    }
  ];
  senderId = loggedinUser.id;
  setter.setInputContent("");

  // 结束流程
  return {
    task,
    fileList,
    userConversationId,
    senderId,
  }
};
