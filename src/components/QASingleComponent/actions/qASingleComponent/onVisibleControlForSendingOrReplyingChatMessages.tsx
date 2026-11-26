import { flowOnVisibleControlForSendingOrReplyingChatMessages } from '../../flows/OnVisibleControlForSendingOrReplyingChatMessages';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 聊天消息发送或回复可见控制
 * 唯一id: qASingleComponent-onVisibleControlForSendingOrReplyingChatMessages
 */
export const onVisibleControlForSendingOrReplyingChatMessages = (
  setter: Setter,
  dispatch: Dispatch,
  entity: any,
  index: number,
  userCloneId: string,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnVisibleControlForSendingOrReplyingChatMessages({ setter, dispatch, entity, index, userCloneId }).then((result) => {
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
