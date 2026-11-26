import { forwardLogin } from '@/logic/forwards';
import { message } from 'antd';
import Cookies from "js-cookie";


/**
 * 入参明细:
 */
export interface FlowCodeObtainUserkenParams {
}

/**
 * 出参明细:
 * token token
 * userId 用户ID
 */
export interface FlowCodeObtainUserkenResults {
  token: string;
  userId: string;
}

/**
 * 获取用户token
 * FLOW_NODE_OBTAIN_USERKEN
 * 唯一id: EmptyLayout/FLOW_CODE_OBTAIN_USERKEN
 */
export const flowCodeObtainUserken = async (params: FlowCodeObtainUserkenParams): Promise<FlowCodeObtainUserkenResults> => {
  // 初始化流程出参
  let token;
  let userId;
  // TODO：开始流程

  token = Cookies.get('token');
  userId = Cookies.get('userId');
  if (!token || !userId) {
    message.error('请先登录');
    forwardLogin();
    throw new Error('请先登录');
  }


  // 结束流程
  return {
    token,
    userId,
  }
};
