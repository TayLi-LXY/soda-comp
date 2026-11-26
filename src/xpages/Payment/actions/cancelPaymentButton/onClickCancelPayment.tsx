import { flowOnClickCancelPayment } from '../../flows/OnClickCancelPayment';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 点击取消支付
 * 唯一id: payment-onClickCancelPayment
 */
export const onClickCancelPayment = async (
  event: any,
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
  flowOnClickCancelPayment({ dispatch, orderNumber, paymentAccountId }).then((result) => {
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
