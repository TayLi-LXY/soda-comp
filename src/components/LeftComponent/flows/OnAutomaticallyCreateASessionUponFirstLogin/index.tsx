import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * ifFirstLogWithoutConversation 是否首次登录无会话
 * loggedinUser 登录用户
 */
export interface FlowOnAutomaticallyCreateASessionUponFirstLoginParams {
  setter: any;
  dispatch: any;
  ifFirstLogWithoutConversation: any;
  loggedinUser: any;
}

/**
 * 出参明细:
 */
export interface FlowOnAutomaticallyCreateASessionUponFirstLoginResults {
}

/**
 * 首次登录自动创建会话
 * @com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_AUTOMATICALLY_CREATE_A_SESSION_UPON_FIRST_LOGIN
 */
export const flowOnAutomaticallyCreateASessionUponFirstLogin = async (params: FlowOnAutomaticallyCreateASessionUponFirstLoginParams): Promise<FlowOnAutomaticallyCreateASessionUponFirstLoginResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_AUTOMATICALLY_CREATE_A_SESSION_UPON_FIRST_LOGIN', { ...params });
};
