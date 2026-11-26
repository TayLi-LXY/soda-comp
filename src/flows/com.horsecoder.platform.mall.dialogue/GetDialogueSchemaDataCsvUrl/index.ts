import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * dialogueDataSchemaId 对话SchemaID
 */
export interface FlowGetDialogueSchemaDataCsvUrlParams {
  dialogueDataSchemaId: string;
}

/**
 * 出参明细:
 * url url
 */
export interface FlowGetDialogueSchemaDataCsvUrlResults {
  url: string;
}

/**
 * 获取对话Schema数据CSV预览链接
 * @com.horsecoder.platform.mall.dialogue/FLOW_GET_DIALOGUE_SCHEMA_DATA_CSV_URL
 */
export const flowGetDialogueSchemaDataCsvUrl = async (params: FlowGetDialogueSchemaDataCsvUrlParams): StandardPromise<FlowGetDialogueSchemaDataCsvUrlResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_GET_DIALOGUE_SCHEMA_DATA_CSV_URL',
      params: { ...params },
    },
  });
};


export const flowGetDialogueSchemaDataCsvUrlFacade = async (params: FlowGetDialogueSchemaDataCsvUrlParams): Promise<FlowGetDialogueSchemaDataCsvUrlResults> => {
  const { data: { value } } =  await flowGetDialogueSchemaDataCsvUrl(params);
  return value;
};