import { flowOnClickOnAccountLogin } from '../../flows/OnClickOnAccountLogin';
import type { Dispatch } from 'redux';
import { message, type FormInstance } from 'antd';
import type { Setter } from '../../setter';

/**
 * 点击账号登录
 * 唯一id: logIn-onClickOnAccountLogin
 */
export const onClickOnAccountLogin = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
  loginForm: FormInstance<any>,
  graphicCaptchaText: string | undefined,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickOnAccountLogin({ setter, dispatch, loginForm, graphicCaptchaText }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
    if (err.message.includes('815')) {
      message.info('密码错误，请重新输入');
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
