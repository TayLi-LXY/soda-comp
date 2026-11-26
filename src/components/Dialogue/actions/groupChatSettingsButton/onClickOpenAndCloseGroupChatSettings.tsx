import { flowOnClickOpenAndCloseGroupChatSettings } from '../../flows/OnClickOpenAndCloseGroupChatSettings';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 点击打开关闭群聊设置抽屉
 * 唯一id: dialogue-onClickOpenAndCloseGroupChatSettings
 */
export const onClickOpenAndCloseGroupChatSettings = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
  groupChatSettingsDrawerVisible: boolean,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickOpenAndCloseGroupChatSettings({ setter, dispatch, groupChatSettingsDrawerVisible }).then((result) => {
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
