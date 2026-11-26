import { flowOnInitializeOrderCardBasedOnOrderNumber } from '../../flows/OnInitializeOrderCardBasedOnOrderNumber';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 根据订单号初始化订单卡片
 * 唯一id: payment-onInitializeOrderCardBasedOnOrderNumber
 */
export const onInitializeOrderCardBasedOnOrderNumber = (
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
  flowOnInitializeOrderCardBasedOnOrderNumber({ setter, dispatch, orderNumber, paymentAccountId }).then((result) => {
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
