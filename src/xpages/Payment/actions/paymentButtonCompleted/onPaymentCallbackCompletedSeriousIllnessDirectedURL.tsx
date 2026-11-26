import { flowOnPaymentCallbackCompletedSeriousIllnessDirectedURL } from '../../flows/OnPaymentCallbackCompletedSeriousIllnessDirectedURL';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 已完成支付回调病重定向到url
 * 唯一id: payment-onPaymentCallbackCompletedSeriousIllnessDirectedURL
 */
export const onPaymentCallbackCompletedSeriousIllnessDirectedURL = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
  redirectURL: string | undefined,
  orderNumber: string | undefined,
  selectPaymentMethod: boolean,
  paymentCompletionCallback: (payOrderNumber: string) => void,
  paymentAccountId: string | undefined,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnPaymentCallbackCompletedSeriousIllnessDirectedURL({dispatch, redirectURL, orderNumber, selectPaymentMethod, paymentCompletionCallback, paymentAccountId }).then((result) => {
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
