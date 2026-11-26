import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * executionGraphId 执行图ID
 */
export interface FlowDownloadExecutionDiagramParams {
  executionGraphId: string;
}

/**
 * 出参明细:
 * executionGraph 执行图
 */
export interface FlowDownloadExecutionDiagramResults {
  executionGraph: string;
}

/**
 * 下载执行图
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_DOWNLOAD_EXECUTION_DIAGRAM
 */
export const flowDownloadExecutionDiagram = async (params: FlowDownloadExecutionDiagramParams): StandardPromise<FlowDownloadExecutionDiagramResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_DOWNLOAD_EXECUTION_DIAGRAM',
      params: { ...params },
    },
  });
};


export const flowDownloadExecutionDiagramFacade = async (params: FlowDownloadExecutionDiagramParams): Promise<FlowDownloadExecutionDiagramResults> => {
  const { data: { value } } =  await flowDownloadExecutionDiagram(params);
  return value;
};