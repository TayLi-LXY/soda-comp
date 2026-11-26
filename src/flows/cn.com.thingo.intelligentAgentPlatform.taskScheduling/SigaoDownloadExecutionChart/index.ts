import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { SigaoExecutionChart } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/SigaoExecutionChart';

/**
 * 入参明细:
 * taskIdList 任务Id
 */
export interface FlowSigaoDownloadExecutionChartParams {
  taskIdList: string;
}

/**
 * 出参明细:
 * sigaoExecutionChart 思高执行图
 */
export interface FlowSigaoDownloadExecutionChartResults {
  sigaoExecutionChart?: SigaoExecutionChart;
}

/**
 * 思高下载执行图
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_SIGAO_DOWNLOAD_EXECUTION_CHART
 */
export const flowSigaoDownloadExecutionChart = async (params: FlowSigaoDownloadExecutionChartParams): StandardPromise<FlowSigaoDownloadExecutionChartResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_SIGAO_DOWNLOAD_EXECUTION_CHART',
      params: { ...params },
    },
  });
};


export const flowSigaoDownloadExecutionChartFacade = async (params: FlowSigaoDownloadExecutionChartParams): Promise<FlowSigaoDownloadExecutionChartResults> => {
  const { data: { value } } =  await flowSigaoDownloadExecutionChart(params);
  return value;
};