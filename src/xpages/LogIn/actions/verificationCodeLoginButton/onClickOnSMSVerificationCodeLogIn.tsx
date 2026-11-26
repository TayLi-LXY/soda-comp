import { flowOnClickOnSMSVerificationCodeLogIn } from '../../flows/OnClickOnSMSVerificationCodeLogIn';
import type { Dispatch } from 'redux';
import { message, type FormInstance } from 'antd';
import type { Setter } from '../../setter';

/**
 * 点击短信验证码登录
 * 唯一id: logIn-onClickOnSMSVerificationCodeLogIn
 */
export const onClickOnSMSVerificationCodeLogIn = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
  verificationCodeLoginForm: FormInstance<any>,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickOnSMSVerificationCodeLogIn({ setter, dispatch, verificationCodeLoginForm }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
    if (err.message.includes('805')) {
      message.info('验证码过期或者错误，请重新获取');
    }
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
