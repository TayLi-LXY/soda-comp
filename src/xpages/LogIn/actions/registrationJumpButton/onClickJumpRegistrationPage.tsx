import { forwardRegister } from '@/logic/forwards';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 点击跳转到注册页面
 * 唯一id: logIn-onClickJumpRegistrationPage
 */
export const onClickJumpRegistrationPage = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  forwardRegister();
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
