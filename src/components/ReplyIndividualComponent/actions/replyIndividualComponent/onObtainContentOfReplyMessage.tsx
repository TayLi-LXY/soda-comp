import { flowOnObtainContentOfReplyMessage } from '../../flows/OnObtainContentOfReplyMessage';
import type { Dispatch } from 'redux';
import type { DialogueMessage } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueMessage';
import type { Setter } from '../../setter';

/**
 * 获取回复消息内容
 * 唯一id: replyIndividualComponent-onObtainContentOfReplyMessage
 */
export const onObtainContentOfReplyMessage = (
  setter: Setter,
  dispatch: Dispatch,
  entity: DialogueMessage | undefined,
  index: number,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnObtainContentOfReplyMessage({ setter, dispatch, entity, index }).then((result) => {
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
