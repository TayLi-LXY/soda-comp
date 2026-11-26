
/**
 * 入参明细:
 * loggedinUser 登录用户
 */
export interface FlowCodePrepareCreateSessionParametersParams {
  loggedinUser: any;
}

/**
 * 出参明细:
 * imUserId IM发送用户ID
 * recipientIdList 接收人ID列表
 * name 名字
 */
export interface FlowCodePrepareCreateSessionParametersResults {
  imUserId: string;
  recipientIdList: string[];
  name: string;
}

/**
 * 准备创建会话参数
 * FLOW_NODE_PREPARE_CREATE_SESSION_PARAMETERS
 * 唯一id: LeftComponent/FLOW_CODE_PREPARE_CREATE_SESSION_PARAMETERS
 */
export const flowCodePrepareCreateSessionParameters = async (params: FlowCodePrepareCreateSessionParametersParams): Promise<FlowCodePrepareCreateSessionParametersResults> => {
  // 初始化流程出参
  let imUserId;
  let recipientIdList;
  let name;
  // 开始流程
  const { loggedinUser } = params;

  imUserId = loggedinUser.id;
  recipientIdList = ["0"];
  name = loggedinUser.name;

  // 结束流程
  return {
    imUserId,
    recipientIdList,
    name,
  }
};
