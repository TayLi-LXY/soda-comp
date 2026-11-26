import { flowOnChatSummaryMessageInitializeResultDisplay } from '../../flows/OnChatSummaryMessageInitializeResultDisplay';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 根据聊天总结消息初始化结果展示
 * 唯一id: queryResultDisplayComponent-onChatSummaryMessageInitializeResultDisplay
 */
export const onChatSummaryMessageInitializeResultDisplay = (
  setter: Setter,
  dispatch: Dispatch,
  ifStream: boolean,
  messageId: string | undefined,
  messageContent: string | undefined,
  resultRefreshSignal: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */

  if (!messageId || !messageContent || ifStream || !resultRefreshSignal) return;
    try {
    messageContent = JSON.parse(messageContent);
  } catch {
    return;
  }
  flowOnChatSummaryMessageInitializeResultDisplay({ setter, dispatch, ifStream, messageId, messageContent }).then((result) => {
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
