import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 初始化发送附件列表
 * 唯一id: sendSingleAttachmentInformation-onInitializeSendingAttachmentList
 */
export const onInitializeSendingAttachmentList = (
  setter: Setter,
  dispatch: Dispatch,
  entity: any,
) => {
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

  if (!entity) return;
  let message = entity.content;
  try {
    message = JSON.parse(message);
    setter.setSendMessageFileCardList(message.dialogueTaskFileList.map(f => {
      return {
      ...f,
      ifSelected: false,
    }}));
  } catch {}

  /*
   * [END OF YOUR CODE]
   */
};
