import { flowOnSendMobileVerificationCode } from '../../flows/OnSendMobileVerificationCode';
import type { Dispatch } from 'redux';
import { message, type FormInstance } from 'antd';
import type { Setter } from '../../setter';
import { forwardLogin } from '@/src/logic/forwards';

/**
 * 发送手机验证码
 * 唯一id: register-onSendMobileVerificationCode
 */
export const onSendMobileVerificationCode = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
  graphicalVerificationCode: string | undefined,
  registrationMobileVerificationForm: FormInstance<any>,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnSendMobileVerificationCode({ setter, dispatch, graphicalVerificationCode, registrationMobileVerificationForm }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
    if (err.message.includes('814')) {
      message.info('已有账户，请直接登录');
      forwardLogin();
    } else {
      message.error('获取短信验证码失败，请稍后重试');
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
