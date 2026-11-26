import { flowOnClickSendUserMessage } from '../../flows/OnClickSendUserMessage';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

/**
 * 点击发送用户消息
 * 唯一id: inputBox-onClickSendUserMessage
 */
export const onClickSendUserMessage = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
  selectedllm: string | undefined,
  userUploadedFileList: any[],
  inputContent: string,
  conversationId: string,
  userConversationId: string | undefined,
  loggedinUser: User | undefined,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickSendUserMessage({ setter, dispatch, selectedllm, userUploadedFileList, inputContent, conversationId, userConversationId, loggedinUser }).then((result) => {
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
