import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DataSmartAccountMember } from '@/flows/com.horsecoder.platform.mall.dialogue/CreateDataSmartAccountMembership/types/DataSmartAccountMember';

/**
 * 入参明细:
 * userId 用户ID
 * memberAccountBeUpdated 待更新会员账户
 */
export interface FlowUpdateDataIntelligentAccountStatusParams {
  userId: string;
  memberAccountBeUpdated: DataSmartAccountMember;
}

/**
 * 出参明细:
 * memberType 会员类型
 */
export interface FlowUpdateDataIntelligentAccountStatusResults {
  memberType?: string;
}

/**
 * 更新数据智能账户状态
 * @com.horsecoder.platform.mall.dialogue/FLOW_UPDATE_DATA_INTELLIGENT_ACCOUNT_STATUS
 */
export const flowUpdateDataIntelligentAccountStatus = async (params: FlowUpdateDataIntelligentAccountStatusParams): StandardPromise<FlowUpdateDataIntelligentAccountStatusResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_UPDATE_DATA_INTELLIGENT_ACCOUNT_STATUS',
      params: { ...params },
    },
  });
};


export const flowUpdateDataIntelligentAccountStatusFacade = async (params: FlowUpdateDataIntelligentAccountStatusParams): Promise<FlowUpdateDataIntelligentAccountStatusResults> => {
  const { data: { value } } =  await flowUpdateDataIntelligentAccountStatus(params);
  return value;
};