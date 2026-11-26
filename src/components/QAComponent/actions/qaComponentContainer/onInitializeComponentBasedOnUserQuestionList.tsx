import type { Dispatch } from 'redux';
import type { DialogueMessage } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueMessage';
import type { Setter } from '../../setter';

/**
 * 根据用户消息列表单项初始化思考组件
 * 唯一id: qAComponent-onInitializeComponentBasedOnUserQuestionList
 */
export const onInitializeComponentBasedOnUserQuestionList = (
  setter: Setter,
  dispatch: Dispatch,
  entity: DialogueMessage | undefined,
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

  if (!entity) return;
  if (!entity.dialogueTask || !entity.dialogueTask.state) {
    setter.setThinkingProcessVisibleControl(false); 
    return;
  }
  if (entity.dialogueTask.state === '101') {
    setter.setThinkingProcessVisibleControl(true);
  }

  /*
   * [END OF YOUR CODE]
   */
};
