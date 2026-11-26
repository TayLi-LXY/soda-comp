import { flowOnClickOpenWeChatLogin } from '../../flows/OnClickOpenWeChatLogin';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 点击打开微信登录
 * 唯一id: logIn-onClickOpenWeChatLogin
 */
export const onClickOpenWeChatLogin = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickOpenWeChatLogin({ setter, dispatch }).then((result) => {
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

  const appId = "wx8ffe8e816d53c485";

  const redirectUri = encodeURIComponent(
    "https://ai.horsecoder.com/scaned/"
  );

  window.location.href =
    `https://open.weixin.qq.com/connect/qrconnect` +
    `?appid=${appId}` +
    `&redirect_uri=${redirectUri}` +
    `&response_type=code` +
    `&scope=snsapi_login` +
    `&state=123456#wechat_redirect`;

  /*
   * [END OF YOUR CODE]
   */
};
