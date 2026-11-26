import type { Dispatch } from 'redux';
import type { DialogueMessage } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueMessage';
import type { Setter } from '../../setter';

/**
 * 初始化消息内容相关数据
 * 唯一id: queryResultDisplayComponent-onInitializeMessageContentRelatedData
 */
export const onInitializeMessageContentRelatedData = (
  setter: Setter,
  dispatch: Dispatch,
  entity: DialogueMessage | undefined,
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
  const message = entity.content;
  try {
    const parseMessage = JSON.parse(message);
    if (parseMessage.dialogueTask?.state !== '301' || entity.ifStream) return;
  } catch {
    return;
  }
  setter.setMessageId(entity.id);
  setter.setIfStream(entity.ifStream);
  setter.setMessageContent(message);

  /*
   * [END OF YOUR CODE]
   */
};
