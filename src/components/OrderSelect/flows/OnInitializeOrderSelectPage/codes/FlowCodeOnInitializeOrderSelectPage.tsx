
import { message } from 'antd';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * memberType 会员类型
 */
export interface FlowCodeOnInitializeOrderSelectPageParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  memberType: any;
}

/**
 * 出参明细:
 * accountId 账户ID
 * orderType 订单类型
 */
export interface FlowCodeOnInitializeOrderSelectPageResults {
  accountId: string;
  orderType: string;
}

/**
 * 初始化订单选择页面
 * FLOW_NODE_ON_INITIALIZE_ORDER_SELECT_PAGE
 * 唯一id: OrderSelect/FLOW_CODE_ON_INITIALIZE_ORDER_SELECT_PAGE
 */
export const flowCodeOnInitializeOrderSelectPage = async (params: FlowCodeOnInitializeOrderSelectPageParams): Promise<FlowCodeOnInitializeOrderSelectPageResults> => {
  // 初始化流程出参
  let accountId;
  let orderType;
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { loggedinUser } = params;
  const { memberType } = params;

  // 验证登录用户
  if (!loggedinUser || !loggedinUser.id) {
    message.error('登录用户不存在');
    return {
      accountId: '',
      orderType: '',
    };
  }

  // 设置账户ID和订单类型
  accountId = loggedinUser.id;
  orderType = '0';

  // 判断是否是 Pro 付费用户
  if (memberType === 'Pro') {
    setter.setFreeVersionVisible(false);
  }

  // 结束流程
  return {
    accountId,
    orderType,
  }
};
