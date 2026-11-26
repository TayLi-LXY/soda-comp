import type { DataFile } from '@/flows/com.horsecoder.platform.mall.dialogue/IntelligentDataQuery/types/DataFile';

/**
 * 入参明细:
 * inputContent 输入内容
 * attachmentList 附件列表
 * loggedinUser 登录用户
 * setter 页面设置器
 */
export interface FlowNodeSubmitTaskPreparationParametersParams {
  inputContent: string;
  attachmentList: any[];
  loggedinUser: any;
  setter: any;
}

/**
 * 出参明细:
 * task 任务
 * fileList 文件列表
 * senderId 发送者ID
 */
export interface FlowNodeSubmitTaskPreparationParametersResults {
  task: string;
  fileList: DataFile[];
  senderId: string;
}

/**
 * 提交任务准备参数
 * FLOW_NODE_SUBMIT_TASK_PREPARATION_PARAMETERS
 * 唯一id: Dialogue/FLOW_NODE_SUBMIT_TASK_PREPARATION_PARAMETERS
 */
export const flowNodeSubmitTaskPreparationParameters = async (params: FlowNodeSubmitTaskPreparationParametersParams): Promise<FlowNodeSubmitTaskPreparationParametersResults> => {
  // 初始化流程出参
  let task;
  let fileList;
  let senderId;
  // 开始流程
  const { inputContent } = params;
  const { attachmentList } = params;
  const { loggedinUser } = params;
  const { setter } = params;

  task = inputContent;
  senderId = loggedinUser.id;
  fileList = attachmentList.map(a => {
    return {
      filename: a.name,
      fileSize: String(a.size),
      fileType: a.type,
      fileUrl: a.url.substring(a.url.lastIndexOf('fileName=') + 9)
    }
  });
  setter.setInputBoxValue(undefined);

  // 结束流程
  return {
    task,
    fileList,
    senderId,
  }
};
