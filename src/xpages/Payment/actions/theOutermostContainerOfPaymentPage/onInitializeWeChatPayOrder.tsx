import { flowOnInitializeWeChatPayOrder } from '../../flows/OnInitializeWeChatPayOrder';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 初始化支付订单
 * 唯一id: payment-onInitializeWeChatPayOrder
 */
export const onInitializeWeChatPayOrder = (
  setter: Setter,
  dispatch: Dispatch,
  orderNumber: string | undefined,
  paymentAccountId: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnInitializeWeChatPayOrder({ setter, dispatch, orderNumber, paymentAccountId }).then((result) => {
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
