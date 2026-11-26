import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 点击刷新图形验证码
 * 唯一id: logIn-onClickRefreshGraphicalCaptcha
 */
export const onClickRefreshGraphicalCaptcha = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  setter.setGraphicCaptchaRefreshSignal(Math.random().toString());

  /*
   * [END OF YOUR CODE]
   */
};
