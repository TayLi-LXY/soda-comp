import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 修改选中对话状态
 * 唯一id: leftComponent-onModifySelectedConversationStatus
 */
export const onModifySelectedConversationStatus = (
  index: number,
  setter: Setter,
  dispatch: Dispatch,
  dialogueCardList: any[],
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

  dialogueCardList.forEach((card, idx) => {
    if (idx === index) {
      card.ifSelected = true;
    }
  })
  setter.setDialogueCardList(dialogueCardList);

  /*
   * [END OF YOUR CODE]
   */
};
