import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 输入全局变化初始化输入框
 * 唯一id: dialogue-onEnterGlobalChangesInitializeInputBox
 */
export const onEnterGlobalChangesInitializeInputBox = (
  setter: Setter,
  dispatch: Dispatch,
  inputGlobalData: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  setter.setInputBoxValue(inputGlobalData);
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
