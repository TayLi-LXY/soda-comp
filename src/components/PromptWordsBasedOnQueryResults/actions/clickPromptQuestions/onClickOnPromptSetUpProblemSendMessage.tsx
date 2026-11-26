import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';
import { refreshDialogueComponentInputGlobalDataState } from '@/src/models/Dialogue/action';

/**
 * 点击提示问题设置发送信息
 * 唯一id: promptWordsBasedOnQueryResults-onClickOnPromptSetUpProblemSendMessage
 */
export const onClickOnPromptSetUpProblemSendMessage = (
  info: any,
  setter: Setter,
  dispatch: Dispatch,
): void => {
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

  dispatch(refreshDialogueComponentInputGlobalDataState(info?.data?.label));

  /*
   * [END OF YOUR CODE]
   */
};
