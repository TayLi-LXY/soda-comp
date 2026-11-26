import { flowOnInitializeUserDialogueCardList } from '../../flows/OnInitializeUserDialogueCardList';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

/**
 * 初始化用户对话卡片列表
 * 唯一id: leftComponent-onInitializeUserDialogueCardList
 */
export const onInitializeUserDialogueCardList = (
  setter: Setter,
  dispatch: Dispatch,
  conversationId: string | undefined,
  loggedinUser: User | undefined,
  dialogueListRefreshSignal: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  if (!loggedinUser) return;
  flowOnInitializeUserDialogueCardList({ setter, dispatch, conversationId, loggedinUser }).then((result) => {
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
