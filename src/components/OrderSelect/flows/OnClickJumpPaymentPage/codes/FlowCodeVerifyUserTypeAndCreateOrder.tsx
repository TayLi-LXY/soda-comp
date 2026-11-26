import type { OrderDetails } from '@/flows/com.horsecoder.pay/CreatePaymentOrder/types/OrderDetails';
import { flowObtainPaymentAccountDetailsFacade } from '@/flows/com.horsecoder.pay/ObtainPaymentAccountDetails';
import { flowCreatePaymentAccountFacade } from '@/flows/com.horsecoder.pay/CreatePaymentAccount';
import { message } from 'antd';
import { forwardIndexMain } from '@/src/logic/forwards';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * memberType 会员类型
 */
export interface FlowCodeVerifyUserTypeAndCreateOrderParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  memberType: any;
}

/**
 * 出参明细:
 * paymentOrder 支付订单实体
 * orderDetails 订单明细
 */
export interface FlowCodeVerifyUserTypeAndCreateOrderResults {
  paymentOrder: any;
  orderDetails?: OrderDetails[];
}

/**
 * 验证用户类型并创建订单
 * FLOW_NODE_VERIFY_USER_TYPE_AND_CREATE_ORDER
 * 唯一id: OrderSelect/FLOW_CODE_VERIFY_USER_TYPE_AND_CREATE_ORDER
 */
export const flowCodeVerifyUserTypeAndCreateOrder = async (params: FlowCodeVerifyUserTypeAndCreateOrderParams): Promise<FlowCodeVerifyUserTypeAndCreateOrderResults> => {
  // 初始化流程出参
  let paymentOrder;
  let orderDetails: OrderDetails[] = [];
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { loggedinUser } = params;
  const { memberType } = params;

  let paymentAccountId;

  // 1. 校验账户是否已登录，未登录则提示并跳转首页
  if (!loggedinUser || !loggedinUser.id) {
    message.error('账户未登录');
    forwardIndexMain();
    return { paymentOrder, orderDetails };
  }

  // 2. 判断是否已是 Pro 会员，是则提示并终止流程
  if (memberType === 'Pro') {
    message.warning('您已经是Pro月度订阅会员，请勿重复购买');
    return { paymentOrder, orderDetails };
  }

  // 3. 验证是否有支付账户，没有则创建
  // 使用用户 ID 作为支付账户 ID，确保一个用户只有一个支付账户
  paymentAccountId = loggedinUser.id;

  try {
    // 尝试获取支付账户详情
    const accountDetails = await flowObtainPaymentAccountDetailsFacade({
      accountId: paymentAccountId,
    });

    if (accountDetails && accountDetails.paymentAccount) {
      console.log('[verifyAndCreateOrder] 已存在支付账户:', paymentAccountId);
    }
  } catch (error) {
    // 账户不存在，创建新账户（使用用户 ID 作为账户 ID）
    console.log('[verifyAndCreateOrder] 支付账户不存在，开始创建');
    try {
      const newAccount = await flowCreatePaymentAccountFacade({
        name: loggedinUser.userName || loggedinUser.name,
        type: 0,
        paymentAccountId: paymentAccountId, // 使用用户 ID 作为账户 ID
      });

      if (newAccount && newAccount.paymentAccountEntity) {
        console.log('[verifyAndCreateOrder] 创建支付账户成功:', paymentAccountId);
      } else {
        message.error('支付账户创建失败');
        return { paymentOrder, orderDetails };
      }
    } catch (createError) {
      console.error('[verifyAndCreateOrder] 创建支付账户失败:', createError);
      message.error('支付账户创建失败');
      return { paymentOrder, orderDetails };
    }
  }

  // 4. 根据会员类型设置产品名称
  // const productName = memberType === 1 ? 'Pro 会员' : '标准会员';

  // 5. 构建订单明细
  orderDetails = [
    {
      product: 'Pro 会员',
      quantity: '1',
      unitPrice: '0.01',
      totalProductPrice: '0.01',
    }
  ];

  // 6. 构建支付订单对象（供后续流程使用）
  paymentOrder = {
    accountId: paymentAccountId,
    orderType: 3,
    memberType: memberType,
    money: parseFloat('0.01'),
  };

  console.log('[verifyAndCreateOrder] 订单准备完成，等待创建');

  // 结束流程，返回 paymentOrder 和 orderDetails 供后续节点使用
  return {
    paymentOrder,
    orderDetails,
  }
};
