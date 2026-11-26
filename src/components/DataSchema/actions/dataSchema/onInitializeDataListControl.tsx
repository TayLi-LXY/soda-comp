import type { Dispatch } from 'redux';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';
import type { Setter } from '../../setter';

/**
 * 初始化数据列表控制
 * 唯一id: dataSchema-onInitializeDataListControl
 */
export const onInitializeDataListControl = (
  setter: Setter,
  dispatch: Dispatch,
  dialogueDataSchemaList: SchemaEntity[],
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  setter.setDataSchemaList(dialogueDataSchemaList);
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
