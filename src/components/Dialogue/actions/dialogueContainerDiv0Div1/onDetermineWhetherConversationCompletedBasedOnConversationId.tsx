import { flowOnDetermineWhetherConversationCompletedBasedOnConversationId } from '../../flows/OnDetermineWhetherConversationCompletedBasedOnConversationId';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 根据对话id判断对话是否完成
 * 唯一id: dialogue-onDetermineWhetherConversationCompletedBasedOnConversationId
 */
export const onDetermineWhetherConversationCompletedBasedOnConversationId = (
  setter: Setter,
  dispatch: Dispatch,
  conversationId: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnDetermineWhetherConversationCompletedBasedOnConversationId({ setter, dispatch, conversationId, isConversationComplete: null }).then((result) => {
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
