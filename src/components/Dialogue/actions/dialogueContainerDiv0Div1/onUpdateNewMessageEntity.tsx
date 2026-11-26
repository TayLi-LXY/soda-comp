import { flowOnUpdateNewMessageEntity } from '../../flows/OnUpdateNewMessageEntity';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 更新新消息实体
 * 唯一id: dialogue-onUpdateNewMessageEntity
 */
export const onUpdateNewMessageEntity = (
  setter: Setter,
  dispatch: Dispatch,
  latestNewsRecordEntity: list,
  senderNicknameDictionary: map,
  conversationId: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnUpdateNewMessageEntity({ setter, dispatch, latestNewsRecordEntity, senderNicknameDictionary, conversationId }).then((result) => {
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
