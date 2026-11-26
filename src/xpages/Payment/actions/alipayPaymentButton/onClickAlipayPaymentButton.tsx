import { flowOnClickAlipayPaymentButton } from '../../flows/OnClickAlipayPaymentButton';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 点击支付宝支付按钮
 * 唯一id: payment-onClickAlipayPaymentButton
 */
export const onClickAlipayPaymentButton = async (
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
  flowOnClickAlipayPaymentButton({ setter, dispatch, orderNumber, paymentAccountId }).then((result) => {
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
