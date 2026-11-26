import { refreshEmptyLayoutLayoutLoggedinUserState } from '@/models/EmptyLayout/action';

/**
 * 入参明细:
 * dispatch 全局设置器
 * loggedinUser 登录用户
 */
export interface FlowCodeDispatchLoggedinUserParams {
  dispatch: any;
  loggedinUser: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeDispatchLoggedinUserResults {
}

/**
 * 设置数据:登录用户
 * FLOW_NODE_DISPATCH_LOGGEDIN_USER
 * 唯一id: Scaned/FLOW_CODE_DISPATCH_LOGGEDIN_USER
 */
export const flowCodeDispatchLoggedinUser = async (params: FlowCodeDispatchLoggedinUserParams): Promise<FlowCodeDispatchLoggedinUserResults> => {
  // 初始化流程出参
  // 开始流程
  const { dispatch } = params;
  const { loggedinUser } = params;
  dispatch(refreshEmptyLayoutLayoutLoggedinUserState(loggedinUser));
  // 结束流程
  return {}
};
