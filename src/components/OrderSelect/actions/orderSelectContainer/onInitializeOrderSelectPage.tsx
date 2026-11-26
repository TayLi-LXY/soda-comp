import { flowOnInitializeOrderSelectPage } from '../../flows/OnInitializeOrderSelectPage';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

/**
 * 初始化订单选择页面
 * 唯一id: orderSelect-onInitializeOrderSelectPage
 */
export const onInitializeOrderSelectPage = (
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  memberType: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnInitializeOrderSelectPage({ setter, dispatch, loggedinUser, memberType }).then((result) => {
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
