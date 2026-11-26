import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueTaskFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueTaskFile';

/**
 * 入参明细:
 * dialogueTaskFile 对话任务文件
 */
export interface FlowBasedOnContentSummaryOfInitializeFileParams {
  dialogueTaskFile: DialogueTaskFile;
}

/**
 * 出参明细:
 * summaryContent 摘要内容
 */
export interface FlowBasedOnContentSummaryOfInitializeFileResults {
  summaryContent: string;
}

/**
 * 根据文件初始化内容摘要
 * @com.horsecoder.platform.mall.dialogue/FLOW_BASED_ON_CONTENT_SUMMARY_OF_INITIALIZE_FILE
 */
export const flowBasedOnContentSummaryOfInitializeFile = async (params: FlowBasedOnContentSummaryOfInitializeFileParams): StandardPromise<FlowBasedOnContentSummaryOfInitializeFileResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_BASED_ON_CONTENT_SUMMARY_OF_INITIALIZE_FILE',
      params: { ...params },
    },
  });
};


export const flowBasedOnContentSummaryOfInitializeFileFacade = async (params: FlowBasedOnContentSummaryOfInitializeFileParams): Promise<FlowBasedOnContentSummaryOfInitializeFileResults> => {
  const { data: { value } } =  await flowBasedOnContentSummaryOfInitializeFile(params);
  return value;
};