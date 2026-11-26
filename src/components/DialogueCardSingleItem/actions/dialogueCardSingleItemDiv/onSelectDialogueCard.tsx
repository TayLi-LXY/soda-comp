import React from 'react';
import type { Dispatch } from 'redux';
import type { DialogueCard } from '@/types/com.horsecoder.platform.mall.umi.chat/dialogueCardSingleItem/DialogueCard';
import type { Setter } from '../../setter';
import { forwardIndexMain } from '@/logic/forwards';
import { refreshDialogueComponentUserConversationIdState } from '@/models/Dialogue/action';

/**
 * 选中对话卡片
 * 唯一id: dialogueCardSingleItem-onSelectDialogueCard
 */
export const onSelectDialogueCard = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
  selectDialogueCallback: ((index: number) => void) | undefined,
  index: number,
  entity: DialogueCard | undefined,
): Promise<void> => {
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

  if (!entity || !entity.id || !entity.imConversationId) return;
  dispatch(refreshDialogueComponentUserConversationIdState(entity.id));
  selectDialogueCallback?.(index);
  forwardIndexMain({query: {id: entity.imConversationId}});

  /*
   * [END OF YOUR CODE]
   */
};
