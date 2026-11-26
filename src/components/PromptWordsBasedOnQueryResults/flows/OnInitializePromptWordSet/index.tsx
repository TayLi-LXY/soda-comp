import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnInitializePromptWordSetParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializePromptWordSetResults {
}

/**
 * 初始化提示词集
 * @com.horsecoder.platform.mall.umi.chat/promptWordsBasedOnQueryResults/FLOW_ON_INITIALIZE_PROMPT_WORD_SET
 */
export const flowOnInitializePromptWordSet = async (params: FlowOnInitializePromptWordSetParams): Promise<FlowOnInitializePromptWordSetResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/promptWordsBasedOnQueryResults/FLOW_ON_INITIALIZE_PROMPT_WORD_SET', { ...params });
};
