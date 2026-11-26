import { message } from 'antd';
import { forwardPay } from '@/logic/forwards';
import { flowOnClickJumpPaymentPage } from '../../flows/OnClickJumpPaymentPage';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

/**
 * 点击跳转到支付页
 * 唯一id: orderSelect-onClickJumpPaymentPage
 */
export const onClickJumpPaymentPage = async (
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
  // flowOnClickJumpPaymentPage({ setter, dispatch, loggedinUser, memberType }).then((result) => {
  //   // console.log(result);
  // }).catch((err) => {
  //   console.error(err);
  // });
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  // Pro 会员不允许重复购买
  if (memberType!=null && memberType === 'Pro') {
    message.warning('您已经是Pro月度订阅会员，请勿重复购买');
    return;
  }

  flowOnClickJumpPaymentPage({ setter, dispatch, loggedinUser, memberType }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
  });

  /*
   * [END OF YOUR CODE]
   */
};
