import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * organizeId 组织Id
 */
export interface FlowDeleteOrganizeInterfaceParams {
  organizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowDeleteOrganizeInterfaceResults {
}

/**
 * 删除组织接口
 * @com.horsecoder.platform.permission/FLOW_DELETE_ORGANIZE_INTERFACE
 */
export const flowDeleteOrganizeInterface = async (params: FlowDeleteOrganizeInterfaceParams): StandardPromise<FlowDeleteOrganizeInterfaceResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_DELETE_ORGANIZE_INTERFACE',
      params: { ...params },
    },
  });
};


export const flowDeleteOrganizeInterfaceFacade = async (params: FlowDeleteOrganizeInterfaceParams): Promise<FlowDeleteOrganizeInterfaceResults> => {
  const { data: { value } } =  await flowDeleteOrganizeInterface(params);
  return value;
};