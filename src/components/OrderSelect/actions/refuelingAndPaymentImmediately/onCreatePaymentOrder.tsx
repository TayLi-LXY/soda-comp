import { flowOnCreatePaymentOrder } from '../../flows/OnCreatePaymentOrder';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

/**
 * 创建支付订单
 * 唯一id: orderSelect-onCreatePaymentOrder
 */
export const onCreatePaymentOrder = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  memberType: string | undefined,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnCreatePaymentOrder({ setter, dispatch, loggedinUser, memberType }).then((result) => {
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
