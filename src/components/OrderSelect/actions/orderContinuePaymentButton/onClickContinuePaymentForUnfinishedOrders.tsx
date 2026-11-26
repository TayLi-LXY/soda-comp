import { flowOnClickContinuePaymentForUnfinishedOrders } from '../../flows/OnClickContinuePaymentForUnfinishedOrders';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

/**
 * 点击继续支付未完成订单
 * 唯一id: orderSelect-onClickContinuePaymentForUnfinishedOrders
 */
export const onClickContinuePaymentForUnfinishedOrders = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
  paymentOrderNumber: string | undefined,
  memberType: string | undefined,
  loggedinUser: User | undefined,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickContinuePaymentForUnfinishedOrders({ setter, dispatch, paymentOrderNumber, memberType, loggedinUser }).then((result) => {
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
