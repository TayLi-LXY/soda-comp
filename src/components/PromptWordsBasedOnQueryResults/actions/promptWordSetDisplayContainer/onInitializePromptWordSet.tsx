import { flowOnInitializePromptWordSet } from '../../flows/OnInitializePromptWordSet';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 初始化提示词集
 * 唯一id: promptWordsBasedOnQueryResults-onInitializePromptWordSet
 */
export const onInitializePromptWordSet = (
  setter: Setter,
  dispatch: Dispatch,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnInitializePromptWordSet({ setter, dispatch }).then((result) => {
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
