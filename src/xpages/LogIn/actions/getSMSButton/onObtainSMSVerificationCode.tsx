import { flowOnObtainSMSVerificationCode } from '../../flows/OnObtainSMSVerificationCode';
import type { Dispatch } from 'redux';
import { message, type FormInstance } from 'antd';
import type { Setter } from '../../setter';

/**
 * 获取短信验证码
 * 唯一id: logIn-onObtainSMSVerificationCode
 */
export const onObtainSMSVerificationCode = async (
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
  flowOnObtainSMSVerificationCode({ setter, dispatch, verificationCodeLoginForm }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
    message.error('获取短信验证码失败，请稍后重试');
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
