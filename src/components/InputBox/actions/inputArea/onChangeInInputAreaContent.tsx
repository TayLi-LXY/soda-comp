import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 输入区域内容变化
 * 唯一id: inputBox-onChangeInInputAreaContent
 */
export const onChangeInInputAreaContent = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
): Promise<void> => {
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

  setter.setInputContent(event.target.value);

  /*
   * [END OF YOUR CODE]
   */
};
