import { flowOnGetVerificationCode } from '../../flows/OnGetVerificationCode';
import React from 'react';
import type { Dispatch } from 'redux';
import { message, type FormInstance } from 'antd';
import type { Setter } from '../../setter';

/**
 * 获取验证码
 * 唯一id: scaned-onGetVerificationCode
 */
export const onGetVerificationCode = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
  registrationMobileVerificationForm: FormInstance<any>,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnGetVerificationCode({ setter, dispatch, registrationMobileVerificationForm }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
    if (err.message.includes('700')) {
      message.info('验证码过期或者错误，请重新获取');
    }
    if (err.message.includes('801')) {
      message.info('请求过于频繁，请稍后再试');
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
