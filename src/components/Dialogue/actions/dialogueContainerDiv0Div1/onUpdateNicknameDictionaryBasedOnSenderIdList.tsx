import { flowOnUpdateNicknameDictionaryBasedOnSenderIdList } from '../../flows/OnUpdateNicknameDictionaryBasedOnSenderIdList';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 根据发送人ID列表更新昵称字典
 * 唯一id: dialogue-onUpdateNicknameDictionaryBasedOnSenderIdList
 */
export const onUpdateNicknameDictionaryBasedOnSenderIdList = (
  setter: Setter,
  dispatch: Dispatch,
  senderIdList: list,
  senderNicknameDictionary: map,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnUpdateNicknameDictionaryBasedOnSenderIdList({ setter, dispatch, senderIdList, senderNicknameDictionary }).then((result) => {
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
