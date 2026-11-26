import { flowOnClickOnWeChatPay } from '../../flows/OnClickOnWeChatPay';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 点击微信支付
 * 唯一id: payment-onClickOnWeChatPay
 */
export const onClickOnWeChatPay = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
  orderNumber: string | undefined,
  paymentAccountId: string | undefined,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickOnWeChatPay({ setter, dispatch, orderNumber, paymentAccountId }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
  });
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
};
