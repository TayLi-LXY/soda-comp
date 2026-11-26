import { flowOnDetermineWhetherItAnAddConversation } from '../../flows/OnDetermineWhetherItAnAddConversation';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 判断是否为新增对话
 * 唯一id: leftComponent-onDetermineWhetherItAnAddConversation
 */
export const onDetermineWhetherItAnAddConversation = (
  setter: Setter,
  dispatch: Dispatch,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnDetermineWhetherItAnAddConversation({ setter, dispatch }).then((result) => {
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
