import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueDetailsEntity } from '@/flows/com.horsecoder.platform.mall.aiMarketing/SendAMessage/types/DialogueDetailsEntity';
import type { RequirementAnalysisReport } from '@/flows/com.horsecoder.platform.mall.aiMarketing/RequirementAnalysis/types/RequirementAnalysisReport';

/**
 * 入参明细:
 * conversationId 对话ID
 * dialogueDetailsEntity 对话详情实体
 */
export interface FlowSendAMessageParams {
  conversationId: string;
  dialogueDetailsEntity?: DialogueDetailsEntity;
}

/**
 * 出参明细:
 * requirementAnalysisReportResult 需求分析报告结果
 * dialogueDetailsId 对话详情ID
 */
export interface FlowSendAMessageResults {
  requirementAnalysisReportResult: RequirementAnalysisReport;
  dialogueDetailsId: string;
}

/**
 * 发送消息
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_SEND_A_MESSAGE
 */
export const flowSendAMessage = async (params: FlowSendAMessageParams): StandardPromise<FlowSendAMessageResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_SEND_A_MESSAGE',
      params: { ...params },
    },
  });
};


export const flowSendAMessageFacade = async (params: FlowSendAMessageParams): Promise<FlowSendAMessageResults> => {
  const { data: { value } } =  await flowSendAMessage(params);
  return value;
};