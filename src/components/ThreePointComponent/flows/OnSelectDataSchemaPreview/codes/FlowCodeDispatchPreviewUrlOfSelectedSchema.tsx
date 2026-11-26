import { refreshDialogueComponentPreviewUrlOfSelectedSchemaState } from '@/models/Dialogue/action';

/**
 * 入参明细:
 * dispatch 全局设置器
 * url url
 */
export interface FlowCodeDispatchPreviewUrlOfSelectedSchemaParams {
  dispatch: any;
  url: string;
}

/**
 * 出参明细:
 */
export interface FlowCodeDispatchPreviewUrlOfSelectedSchemaResults {
}

/**
 * 设置数据:选中的schema预览Url
 * FLOW_NODE_DISPATCH_PREVIEW_URL_OF_SELECTED_SCHEMA
 * 唯一id: ThreePointComponent/FLOW_CODE_DISPATCH_PREVIEW_URL_OF_SELECTED_SCHEMA
 */
export const flowCodeDispatchPreviewUrlOfSelectedSchema = async (params: FlowCodeDispatchPreviewUrlOfSelectedSchemaParams): Promise<FlowCodeDispatchPreviewUrlOfSelectedSchemaResults> => {
  // 初始化流程出参
  // 开始流程
  const { dispatch } = params;
  const { url } = params;
  dispatch(refreshDialogueComponentPreviewUrlOfSelectedSchemaState(url));
  // 结束流程
  return {}
};
