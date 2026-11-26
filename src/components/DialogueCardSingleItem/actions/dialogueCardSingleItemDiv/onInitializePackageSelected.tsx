import type { Dispatch } from 'redux';
import type { DialogueCard } from '@/types/com.horsecoder.platform.mall.umi.chat/dialogueCardSingleItem/DialogueCard';
import type { Setter } from '../../setter';

/**
 * 初始化是否选中套装
 * 唯一id: dialogueCardSingleItem-onInitializePackageSelected
 */
export const onInitializePackageSelected = (
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

  if (entity && entity.ifSelected) {
    setter.setSelectChangePackageDataInDialogueCard('selectBackgroundColorForDialogueCard');
  } else {
    setter.setSelectChangePackageDataInDialogueCard('dialogueCardWithNoBackgroundColorSelected');
  }

  /*
   * [END OF YOUR CODE]
   */
};
