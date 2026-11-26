import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * temporaryUserId 临时用户ID
 * newUserId 新用户ID
 * conversationId IM会话ID
 */
export interface FlowMigrationOfImUserSessionParams {
  temporaryUserId: string;
  newUserId: string;
  conversationId: string;
}

/**
 * 出参明细:
 */
export interface FlowMigrationOfImUserSessionResults {
}

/**
 * 迁移IM用户会话
 * @com.horsecoder.im/FLOW_MIGRATION_OF_IM_USER_SESSION
 */
export const flowMigrationOfImUserSession = async (params: FlowMigrationOfImUserSessionParams): StandardPromise<FlowMigrationOfImUserSessionResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_MIGRATION_OF_IM_USER_SESSION',
      params: { ...params },
    },
  });
};


export const flowMigrationOfImUserSessionFacade = async (params: FlowMigrationOfImUserSessionParams): Promise<FlowMigrationOfImUserSessionResults> => {
  const { data: { value } } =  await flowMigrationOfImUserSession(params);
  return value;
};