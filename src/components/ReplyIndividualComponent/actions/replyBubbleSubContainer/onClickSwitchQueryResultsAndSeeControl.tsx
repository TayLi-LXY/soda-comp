import { flowOnClickSwitchQueryResultsAndSeeControl } from '../../flows/OnClickSwitchQueryResultsAndSeeControl';
import React from 'react';
import type { Dispatch } from 'redux';
import type { DialogueMessage } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueMessage';
import type { Setter } from '../../setter';

/**
 * 点击开关查询结果可见控制
 * 唯一id: replyIndividualComponent-onClickSwitchQueryResultsAndSeeControl
 */
export const onClickSwitchQueryResultsAndSeeControl = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
  queryResultsDisplayVisibleControls: boolean,
  entity: DialogueMessage | undefined,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickSwitchQueryResultsAndSeeControl({ setter, dispatch, queryResultsDisplayVisibleControls, entity }).then((result) => {
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
