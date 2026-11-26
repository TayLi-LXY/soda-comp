import { flowOnAutomaticallyCreateASessionUponFirstLogin } from '../../flows/OnAutomaticallyCreateASessionUponFirstLogin';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

/**
 * 首次登录自动创建会话
 * 唯一id: leftComponent-onAutomaticallyCreateASessionUponFirstLogin
 */
export const onAutomaticallyCreateASessionUponFirstLogin = (
  setter: Setter,
  dispatch: Dispatch,
  ifFirstLogWithoutConversation: boolean,
  loggedinUser: User | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  if (!ifFirstLogWithoutConversation || !loggedinUser) return;
  flowOnAutomaticallyCreateASessionUponFirstLogin({ setter, dispatch, ifFirstLogWithoutConversation, loggedinUser }).then((result) => {
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
