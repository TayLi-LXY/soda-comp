import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * organizeId 组织ID
 * operatorId 操作人ID
 * transferorId 移交人ID
 */
export interface FlowTransferOrganizeAdministratorParams {
  organizeId: string;
  operatorId: string;
  transferorId: string;
}

/**
 * 出参明细:
 */
export interface FlowTransferOrganizeAdministratorResults {
}

/**
 * 移交组织管理员
 * @com.horsecoder.platform.permission/FLOW_TRANSFER_ORGANIZE_ADMINISTRATOR
 */
export const flowTransferOrganizeAdministrator = async (params: FlowTransferOrganizeAdministratorParams): StandardPromise<FlowTransferOrganizeAdministratorResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_TRANSFER_ORGANIZE_ADMINISTRATOR',
      params: { ...params },
    },
  });
};


export const flowTransferOrganizeAdministratorFacade = async (params: FlowTransferOrganizeAdministratorParams): Promise<FlowTransferOrganizeAdministratorResults> => {
  const { data: { value } } =  await flowTransferOrganizeAdministrator(params);
  return value;
};