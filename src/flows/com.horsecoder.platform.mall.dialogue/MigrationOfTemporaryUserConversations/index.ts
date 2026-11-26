import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * conversationId IM会话ID
 * temporaryUserId 临时用户ID
 * newUserId 新用户ID
 */
export interface FlowMigrationOfTemporaryUserConversationsParams {
  conversationId: string;
  temporaryUserId: string;
  newUserId: string;
}

/**
 * 出参明细:
 */
export interface FlowMigrationOfTemporaryUserConversationsResults {
}

/**
 * 迁移临时用户对话
 * @com.horsecoder.platform.mall.dialogue/FLOW_MIGRATION_OF_TEMPORARY_USER_CONVERSATIONS
 */
export const flowMigrationOfTemporaryUserConversations = async (params: FlowMigrationOfTemporaryUserConversationsParams): StandardPromise<FlowMigrationOfTemporaryUserConversationsResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_MIGRATION_OF_TEMPORARY_USER_CONVERSATIONS',
      params: { ...params },
    },
  });
};


export const flowMigrationOfTemporaryUserConversationsFacade = async (params: FlowMigrationOfTemporaryUserConversationsParams): Promise<FlowMigrationOfTemporaryUserConversationsResults> => {
  const { data: { value } } =  await flowMigrationOfTemporaryUserConversations(params);
  return value;
};