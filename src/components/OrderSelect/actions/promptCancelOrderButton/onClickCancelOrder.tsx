import { flowOnClickCancelOrder } from '../../flows/OnClickCancelOrder';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

/**
 * 点击取消订单
 * 唯一id: orderSelect-onClickCancelOrder
 */
export const onClickCancelOrder = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  paymentOrderNumber: string | undefined,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickCancelOrder({ setter, dispatch, loggedinUser, paymentOrderNumber }).then((result) => {
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
