import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';

/**
 * 入参明细:
 * imConversationId IM会话ID
 */
export interface FlowGetDialogueSchemaListParams {
  imConversationId: string;
}

/**
 * 出参明细:
 * schemaEntityList Schema实体列表
 */
export interface FlowGetDialogueSchemaListResults {
  schemaEntityList: SchemaEntity[];
}

/**
 * 获取对话Schema列表
 * @com.horsecoder.platform.mall.dialogue/FLOW_GET_DIALOGUE_SCHEMA_LIST
 */
export const flowGetDialogueSchemaList = async (params: FlowGetDialogueSchemaListParams): StandardPromise<FlowGetDialogueSchemaListResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_GET_DIALOGUE_SCHEMA_LIST',
      params: { ...params },
    },
  });
};


export const flowGetDialogueSchemaListFacade = async (params: FlowGetDialogueSchemaListParams): Promise<FlowGetDialogueSchemaListResults> => {
  const { data: { value } } =  await flowGetDialogueSchemaList(params);
  return value;
};