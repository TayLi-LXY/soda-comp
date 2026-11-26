import type { UserLoginResult } from '@/flows/com.horsecoder.identity/Login/types/UserLoginResult';
import { forwardIndexMain } from '@/src/logic/forwards';
import { refreshEmptyLayoutLayoutLoggedinUserState, refreshEmptyLayoutLayoutMemberTypeState } from '@/src/models/EmptyLayout/action';
import type { DataSmartAccountMember } from '@/flows/com.horsecoder.platform.mall.dialogue/CreateDataSmartAccountMembership/types/DataSmartAccountMember';

/**
 * 入参明细:
 * userInfo 用户信息
 * dispatch WEB状态更新
 * dataSmartAccountMember 数据智能账户
 */
export interface FlowCodeLoginSuccessfulRedirectHomepageParams {
  userInfo: UserLoginResult;
  dispatch: any;
  dataSmartAccountMember?: DataSmartAccountMember;
}

/**
 * 出参明细:
 */
export interface FlowCodeLoginSuccessfulRedirectHomepageResults {
}

/**
 * 登录成功跳转首页
 * FLOW_NODE_LOGIN_SUCCESSFUL_REDIRECT_HOMEPAGE
 * 唯一id: LogIn/FLOW_CODE_LOGIN_SUCCESSFUL_REDIRECT_HOMEPAGE
 */
export const flowCodeLoginSuccessfulRedirectHomepage = async (params: FlowCodeLoginSuccessfulRedirectHomepageParams): Promise<FlowCodeLoginSuccessfulRedirectHomepageResults> => {
  // 初始化流程出参
  // 开始流程
  const { userInfo } = params;
  const { dispatch } = params;
  const { dataSmartAccountMember } = params;

  // 转换会员类型：0 → "标准", 1 → "Pro"
  const memberTypeText = dataSmartAccountMember?.memberType === 1 ? 'Pro' : '标准';


  dispatch(refreshEmptyLayoutLayoutLoggedinUserState({
    id: userInfo.id,
    name: userInfo.userName,

  }));
  dispatch(refreshEmptyLayoutLayoutMemberTypeState(memberTypeText));
  forwardIndexMain();
  // 结束流程
  return {}
};
