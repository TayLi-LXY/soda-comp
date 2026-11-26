import type { Dispatch } from 'redux';
import type { DialogueCard } from '@/types/com.horsecoder.platform.mall.umi.chat/dialogueCardSingleItem/DialogueCard';
import type { Setter } from '../../setter';

/**
 * 初始化最近消息时间提示
 * 唯一id: dialogueCardSingleItem-onInitializeRecentMessageTimePrompt
 */
export const onInitializeRecentMessageTimePrompt = (
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

  if (entity && entity.lastMessageTime) {
    let formattedShowTime = '';
    const now = new Date();
    const yearStart = new Date(now.getFullYear(), 0, 1);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const timestamp = entity.lastMessageTime;
    if (timestamp) {
      const d = new Date(timestamp);
      // 今天的消息：显示 HH:mm
      if (d >= today) {
        formattedShowTime = d.toTimeString().slice(0, 5);
      }
      // 今年的消息：显示 MM-DD HH:mm
      else if (d >= yearStart) {
        formattedShowTime = (d.getMonth() + 1).toString().padStart(2, '0') + '-' +
                            d.getDate().toString().padStart(2, '0') + ' ' +
                            d.toTimeString().slice(0, 5);
      }
      // 更早的消息：显示 YYYY-MM-DD
      else {
        formattedShowTime = d.getFullYear() + '-' +
                            (d.getMonth() + 1).toString().padStart(2, '0') + '-' +
                            d.getDate().toString().padStart(2, '0');
      }
    }
    setter.setDialogueCardTimeDisplay(formattedShowTime);
  }

  /*
   * [END OF YOUR CODE]
   */
};
