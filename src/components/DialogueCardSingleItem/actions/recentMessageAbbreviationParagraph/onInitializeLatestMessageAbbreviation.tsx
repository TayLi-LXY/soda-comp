import type { Dispatch } from 'redux';
import type { DialogueCard } from '@/types/com.horsecoder.platform.mall.umi.chat/dialogueCardSingleItem/DialogueCard';
import type { Setter } from '../../setter';

/**
 * 初始化最新一条消息缩略
 * 唯一id: dialogueCardSingleItem-onInitializeLatestMessageAbbreviation
 */
export const onInitializeLatestMessageAbbreviation = (
  setter: Setter,
  dispatch: Dispatch,
  entity: DialogueCard | undefined,
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
  let recentMessageContent = entity.recentMessageContent;
  if (!recentMessageContent) return;
  try {
    recentMessageContent = JSON.parse(recentMessageContent);
    setter.setRecentMessageAbbreviation(recentMessageContent.message);
    return;
  } catch {}
  setter.setRecentMessageAbbreviation(recentMessageContent);

  /*
   * [END OF YOUR CODE]
   */
};
