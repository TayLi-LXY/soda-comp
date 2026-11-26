import { flowOnClickExpandDataSummary } from '../../flows/OnClickExpandDataSummary';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 点击展开数据摘要
 * 唯一id: sendMessageFileCard-onClickExpandDataSummary
 */
export const onClickExpandDataSummary = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
  entity: any,
  index: number,
  selectAttachmentCallback: ((entity: any, index: number) => void) | undefined,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickExpandDataSummary({ setter, dispatch, entity, index, selectAttachmentCallback }).then((result) => {
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
