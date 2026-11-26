import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * text 文本
 */
export interface FlowTranslateParams {
  text: string;
}

/**
 * 出参明细:
 * result 翻译结果
 */
export interface FlowTranslateResults {
  result: string;
}

/**
 * 翻译流程
 * @com.horsecoder.model/FLOW_TRANSLATE
 */
export const flowTranslate = async (params: FlowTranslateParams): StandardPromise<FlowTranslateResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_TRANSLATE',
      params: { ...params },
    },
  });
};


export const flowTranslateFacade = async (params: FlowTranslateParams): Promise<FlowTranslateResults> => {
  const { data: { value } } =  await flowTranslate(params);
  return value;
};