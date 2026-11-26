import { flowOnSelectDataSchemaPreview } from '../../flows/OnSelectDataSchemaPreview';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';
import type { Dispatch } from 'redux';

/**
 * 选中数据Schema预览
 * 唯一id: threePointComponent-onSelectDataSchemaPreview
 */
export const onSelectDataSchemaPreview = (
  entity: SchemaEntity,
  dispatch: Dispatch,
): void => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  if (!entity) return;
  flowOnSelectDataSchemaPreview({ setter: undefined, dispatch, dialogueDataSchemaId: entity.dialogueDataSchema.id }).then((result) => {
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
