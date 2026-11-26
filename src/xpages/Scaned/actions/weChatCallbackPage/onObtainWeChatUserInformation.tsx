import { flowOnObtainWeChatUserInformation } from '../../flows/OnObtainWeChatUserInformation';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';
import { message } from 'antd';
import { forwardLogin } from '@/src/logic/forwards';

/**
 * 获取微信用户信息
 * 唯一id: scaned-onObtainWeChatUserInformation
 */
export const onObtainWeChatUserInformation = (
  setter: Setter,
  dispatch: Dispatch,
  code: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnObtainWeChatUserInformation({ setter, dispatch, code }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    message.error('获取微信用户信息失败');
    forwardLogin();
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
