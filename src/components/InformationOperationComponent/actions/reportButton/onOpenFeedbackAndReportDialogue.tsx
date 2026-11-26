import { flowOnOpenFeedbackAndReportDialogue } from '../../flows/OnOpenFeedbackAndReportDialogue';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 打开反馈与举报对话框
 * 唯一id: informationOperationComponent-onOpenFeedbackAndReportDialogue
 */
export const onOpenFeedbackAndReportDialogue = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnOpenFeedbackAndReportDialogue({ setter, dispatch }).then((result) => {
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
