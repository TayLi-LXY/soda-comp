import { flowOnClickRegister } from '../../flows/OnClickRegister';
import type { Dispatch } from 'redux';
import { message, type FormInstance } from 'antd';
import type { Setter } from '../../setter';

/**
 * 点击注册
 * 唯一id: register-onClickRegister
 */
export const onClickRegister = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
  registrationMobileVerificationForm: FormInstance<any>,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickRegister({ setter, dispatch, registrationMobileVerificationForm }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
    if (err.message.includes('700')) {
      message.info('验证码过期或者错误，请重新获取');
      registrationMobileVerificationForm.resetFields();
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
