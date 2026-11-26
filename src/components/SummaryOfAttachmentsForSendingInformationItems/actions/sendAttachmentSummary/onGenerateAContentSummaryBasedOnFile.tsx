import { flowOnGenerateAContentSummaryBasedOnFile } from '../../flows/OnGenerateAContentSummaryBasedOnFile';
import type { Dispatch } from 'redux';
import type { DialogueTaskFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueTaskFile';
import type { Setter } from '../../setter';

/**
 * 根据文件生成内容摘要
 * 唯一id: summaryOfAttachmentsForSendingInformationItems-onGenerateAContentSummaryBasedOnFile
 */
export const onGenerateAContentSummaryBasedOnFile = (
  setter: Setter,
  dispatch: Dispatch,
  file: DialogueTaskFile | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  if (!file) return;
  flowOnGenerateAContentSummaryBasedOnFile({ setter, dispatch, dialogueTaskFile: file }).then((result) => {
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
