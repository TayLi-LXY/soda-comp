import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * executionDiagramIdList 执行图Id列表
 */
export interface FlowBatchDownloadExecutionDiagramParams {
  executionDiagramIdList: string[];
}

/**
 * 出参明细:
 * executeMapListMap 执行图列表Map
 */
export interface FlowBatchDownloadExecutionDiagramResults {
  executeMapListMap: any;
}

/**
 * 批量下载执行图
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_BATCH_DOWNLOAD_EXECUTION_DIAGRAM
 */
export const flowBatchDownloadExecutionDiagram = async (params: FlowBatchDownloadExecutionDiagramParams): StandardPromise<FlowBatchDownloadExecutionDiagramResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_BATCH_DOWNLOAD_EXECUTION_DIAGRAM',
      params: { ...params },
    },
  });
};


export const flowBatchDownloadExecutionDiagramFacade = async (params: FlowBatchDownloadExecutionDiagramParams): Promise<FlowBatchDownloadExecutionDiagramResults> => {
  const { data: { value } } =  await flowBatchDownloadExecutionDiagram(params);
  return value;
};