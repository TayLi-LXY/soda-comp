import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PromptQuestion } from '@/flows/com.horsecoder.platform.mall.dialogue/InitializeResultsBasedOnQueryResultsAndDisplaym/types/PromptQuestion';

/**
 * 入参明细:
 * fileUrl 文件Url
 * summaryMessage 总结消息
 */
export interface FlowInitializeResultsBasedOnQueryResultsAndDisplaymParams {
  fileUrl?: string;
  summaryMessage: string;
}

/**
 * 出参明细:
 * summarizeContent 总结内容
 * promptQuestionList 提示问题列表
 */
export interface FlowInitializeResultsBasedOnQueryResultsAndDisplaymResults {
  summarizeContent: string;
  promptQuestionList: PromptQuestion[];
}

/**
 * 根据查询结果初始化结果展示
 * @com.horsecoder.platform.mall.dialogue/FLOW_INITIALIZE_RESULTS_BASED_ON_QUERY_RESULTS_AND_DISPLAYM
 */
export const flowInitializeResultsBasedOnQueryResultsAndDisplaym = async (params: FlowInitializeResultsBasedOnQueryResultsAndDisplaymParams): StandardPromise<FlowInitializeResultsBasedOnQueryResultsAndDisplaymResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_INITIALIZE_RESULTS_BASED_ON_QUERY_RESULTS_AND_DISPLAYM',
      params: { ...params },
    },
  });
};


export const flowInitializeResultsBasedOnQueryResultsAndDisplaymFacade = async (params: FlowInitializeResultsBasedOnQueryResultsAndDisplaymParams): Promise<FlowInitializeResultsBasedOnQueryResultsAndDisplaymResults> => {
  const { data: { value } } =  await flowInitializeResultsBasedOnQueryResultsAndDisplaym(params);
  return value;
};