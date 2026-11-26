import { flowOnRetrieveMessageContent } from '../../flows/OnRetrieveMessageContent';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 获取消息内容
 * 唯一id: sendASingleMessage-onRetrieveMessageContent
 */
export const onRetrieveMessageContent = (
  setter: Setter,
  dispatch: Dispatch,
  entity: any,
  index: number,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnRetrieveMessageContent({ setter, dispatch, entity, index }).then((result) => {
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
