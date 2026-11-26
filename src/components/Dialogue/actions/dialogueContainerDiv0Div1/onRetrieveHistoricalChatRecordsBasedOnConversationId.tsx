import { flowOnRetrieveHistoricalChatRecordsBasedOnConversationId } from '../../flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';
import { forwardIndexMain } from '@/src/logic/forwards';

/**
 * 根据对话ID获取历史聊天记录
 * 唯一id: dialogue-onRetrieveHistoricalChatRecordsBasedOnConversationId
 */
export const onRetrieveHistoricalChatRecordsBasedOnConversationId = (
  setter: Setter,
  dispatch: Dispatch,
  conversationId: string | undefined,
  senderNicknameDictionaryRef: any,
  loggedinUser: User | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  if (!loggedinUser) return;
  flowOnRetrieveHistoricalChatRecordsBasedOnConversationId({ setter, dispatch, conversationId, senderNicknameDictionary: senderNicknameDictionaryRef.current, loggedinUser }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
    forwardIndexMain();
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
