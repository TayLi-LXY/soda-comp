import { flowOnSubmitTask } from '../../flows/OnSubmitTask';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';
import { message } from 'antd';

/**
 * 提交任务
 * 唯一id: dialogue-onSubmitTask
 */
export const onSubmitTask = (
  value: string,
  attachments: AttachmentsItemType[],
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  userConversationId: string | undefined,
  conversationId: string | undefined,
): void => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  if (!loggedinUser) {
    message.error('请登录');
    return;
  }
  flowOnSubmitTask({ setter, dispatch, loggedinUser, userConversationId, conversationId, attachmentList: attachments, inputContent: value }).then((result) => {
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
