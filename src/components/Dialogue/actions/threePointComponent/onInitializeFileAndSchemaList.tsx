import { flowOnInitializeFileAndSchemaList } from '../../flows/OnInitializeFileAndSchemaList';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

/**
 * 初始化文件和schema列表
 * 唯一id: dialogue-onInitializeFileAndSchemaList
 */
export const onInitializeFileAndSchemaList = (
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  conversationId: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  if (!loggedinUser || !conversationId) return;
  flowOnInitializeFileAndSchemaList({ setter, dispatch, loggedinUser, conversationId }).then((result) => {
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
