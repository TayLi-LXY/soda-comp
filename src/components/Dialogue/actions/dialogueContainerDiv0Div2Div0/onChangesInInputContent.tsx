import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 输入的内容变化
 * 唯一id: dialogue-onChangesInInputContent
 */
export const onChangesInInputContent = (
  value: string,
  setter: Setter,
  dispatch: Dispatch,
): void => {
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

  setter.setInputBoxValue(value);

  /*
   * [END OF YOUR CODE]
   */
};
