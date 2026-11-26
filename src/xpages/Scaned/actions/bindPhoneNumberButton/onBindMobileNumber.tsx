import { flowOnBindMobileNumber } from '../../flows/OnBindMobileNumber';
import type { Dispatch } from 'redux';
import type { FormInstance } from 'antd';
import type { Setter } from '../../setter';

/**
 * 绑定手机号
 * 唯一id: scaned-onBindMobileNumber
 */
export const onBindMobileNumber = async (
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
  flowOnBindMobileNumber({ setter, dispatch, registrationMobileVerificationForm }).then((result) => {
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
