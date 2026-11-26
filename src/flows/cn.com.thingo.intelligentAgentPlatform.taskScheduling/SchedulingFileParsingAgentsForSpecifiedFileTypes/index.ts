import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * fileUrl 文件url
 * agentGroupName 智能体名称
 * organizeId 组织ID
 * taskDescription 任务描述
 * userId 用户ID
 * fileName 文件名
 */
export interface FlowSchedulingFileParsingAgentsForSpecifiedFileTypesParams {
  fileUrl: string;
  agentGroupName: string;
  organizeId: string;
  taskDescription: string;
  userId: string;
  fileName?: string;
}

/**
 * 出参明细:
 * analysisResults 解析结果
 */
export interface FlowSchedulingFileParsingAgentsForSpecifiedFileTypesResults {
  analysisResults?: any;
}

/**
 * 调度指定文件类型的文件解析智能体
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_SCHEDULING_FILE_PARSING_AGENTS_FOR_SPECIFIED_FILE_TYPES
 */
export const flowSchedulingFileParsingAgentsForSpecifiedFileTypes = async (params: FlowSchedulingFileParsingAgentsForSpecifiedFileTypesParams): StandardPromise<FlowSchedulingFileParsingAgentsForSpecifiedFileTypesResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_SCHEDULING_FILE_PARSING_AGENTS_FOR_SPECIFIED_FILE_TYPES',
      params: { ...params },
    },
  });
};


export const flowSchedulingFileParsingAgentsForSpecifiedFileTypesFacade = async (params: FlowSchedulingFileParsingAgentsForSpecifiedFileTypesParams): Promise<FlowSchedulingFileParsingAgentsForSpecifiedFileTypesResults> => {
  const { data: { value } } =  await flowSchedulingFileParsingAgentsForSpecifiedFileTypes(params);
  return value;
};