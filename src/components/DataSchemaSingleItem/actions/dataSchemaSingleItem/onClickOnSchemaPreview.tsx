import React from 'react';
import type { Dispatch } from 'redux';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';
import type { Setter } from '../../setter';

/**
 * 点击Schema预览
 * 唯一id: dataSchemaSingleItem-onClickOnSchemaPreview
 */
export const onClickOnSchemaPreview = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
  entity: SchemaEntity | undefined,
  selectSchemaCallback: ((entity: SchemaEntity) => void) | undefined,
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

  if (!entity) return;
  selectSchemaCallback?.(entity);

  /*
   * [END OF YOUR CODE]
   */
};
