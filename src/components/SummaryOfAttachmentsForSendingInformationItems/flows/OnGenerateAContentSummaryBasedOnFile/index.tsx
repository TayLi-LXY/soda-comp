import { run } from '@horsecoder/flow';
import type { DialogueTaskFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueTaskFile';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * dialogueTaskFile 对话任务文件
 */
export interface FlowOnGenerateAContentSummaryBasedOnFileParams {
  setter: any;
  dispatch: any;
  dialogueTaskFile: DialogueTaskFile;
}

/**
 * 出参明细:
 */
export interface FlowOnGenerateAContentSummaryBasedOnFileResults {
}

/**
 * 根据文件生成内容摘要
 * @com.horsecoder.platform.mall.umi.chat/summaryOfAttachmentsForSendingInformationItems/FLOW_ON_GENERATE_A_CONTENT_SUMMARY_BASED_ON_FILE
 */
export const flowOnGenerateAContentSummaryBasedOnFile = async (params: FlowOnGenerateAContentSummaryBasedOnFileParams): Promise<FlowOnGenerateAContentSummaryBasedOnFileResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/summaryOfAttachmentsForSendingInformationItems/FLOW_ON_GENERATE_A_CONTENT_SUMMARY_BASED_ON_FILE', { ...params });
};
