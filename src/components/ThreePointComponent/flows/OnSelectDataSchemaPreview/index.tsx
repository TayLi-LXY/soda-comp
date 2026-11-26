import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * dialogueDataSchemaId 对话SchemaID
 */
export interface FlowOnSelectDataSchemaPreviewParams {
  setter: any;
  dispatch: any;
  dialogueDataSchemaId: string;
}

/**
 * 出参明细:
 */
export interface FlowOnSelectDataSchemaPreviewResults {
}

/**
 * 选中数据Schema预览
 * @com.horsecoder.platform.mall.umi.chat/threePointComponent/FLOW_ON_SELECT_DATA_SCHEMA_PREVIEW
 */
export const flowOnSelectDataSchemaPreview = async (params: FlowOnSelectDataSchemaPreviewParams): Promise<FlowOnSelectDataSchemaPreviewResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/threePointComponent/FLOW_ON_SELECT_DATA_SCHEMA_PREVIEW', { ...params });
};
