import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 关闭群聊设置抽屉
 * 唯一id: dialogue-onGroupChatSettingsDrawerClose
 */
export const onGroupChatSettingsDrawerClose = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  setter.setGroupChatSettingsDrawerVisible(false);
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
