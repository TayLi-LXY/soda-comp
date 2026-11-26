import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickJumpLoginPageParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickJumpLoginPageResults {
}

/**
 * 点击跳转到登录页面
 * @com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_JUMP_LOGIN_PAGE
 */
export const flowOnClickJumpLoginPage = async (params: FlowOnClickJumpLoginPageParams): Promise<FlowOnClickJumpLoginPageResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_JUMP_LOGIN_PAGE', { ...params });
};
