import { flowOnClickOpenSettingsPanel } from '../../flows/OnClickOpenSettingsPanel';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';
import { refreshLeftComponentComponentSetPanelVisibleControlsState } from '@/src/models/LeftComponent/action';

/**
 * 点击打开设置面板
 * 唯一id: leftComponent-onClickOpenSettingsPanel
 */
export const onClickOpenSettingsPanel = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
  setPanelVisibleControls: boolean,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickOpenSettingsPanel({ setter, dispatch, setPanelVisibleControls }).then((result) => {
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

  dispatch(refreshLeftComponentComponentSetPanelVisibleControlsState(!setPanelVisibleControls));

  /*
   * [END OF YOUR CODE]
   */
};
