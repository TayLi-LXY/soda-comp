import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DataSmartAccountMembership } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DataSmartAccountMembership';

export interface DataSmartAccountMembershipFilterMapper {
  id?: string;
  userId?: string;
  memberType?: number;
  memberTypeIn?: number[];
  expirationDateFrom?: number;
  expirationDateTo?: number;
  effectiveTimeFrom?: number;
  effectiveTimeTo?: number;
  weight?: number;
  weightIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DataSmartAccountMembershipPostMapper {
  userId?: string;
  memberType?: number;
  expirationDate?: number;
  effectiveTime?: number;
  weight?: number;
}

export interface DataSmartAccountMembershipUpdateMapper {
  id: string;
  userId?: string;
  memberType?: number;
  expirationDate?: number;
  effectiveTime?: number;
  weight?: number;
}

export const getDataSmartAccountMembershipSimple = async (id: string): StandardPromise<DataSmartAccountMembership> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership/single/simple', {
    params: { id },
  });
};

export const getDataSmartAccountMembership = async (id: string): StandardPromise<DataSmartAccountMembership> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership/single', {
    params: { id },
  });
};

export const getDataSmartAccountMembershipList = async (params: DataSmartAccountMembershipFilterMapper): StandardPromise<DataSmartAccountMembership[]> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership/filter', { params });
};

export const getDataSmartAccountMembershipDetailList = async (params: DataSmartAccountMembershipFilterMapper): StandardPromise<DataSmartAccountMembership[]> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership/filter/detail', { params });
};

export const postDataSmartAccountMembership = async (params: DataSmartAccountMembershipPostMapper): StandardPromise<DataSmartAccountMembership> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDataSmartAccountMembershipBatch = async (params: DataSmartAccountMembershipPostMapper[]): StandardPromise<DataSmartAccountMembership[]> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDataSmartAccountMembership = async (params: DataSmartAccountMembershipUpdateMapper): StandardPromise<DataSmartAccountMembership> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDataSmartAccountMembershipBatch = async (params: DataSmartAccountMembershipUpdateMapper[]): StandardPromise<DataSmartAccountMembership[]> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDataSmartAccountMembership = async (params: DataSmartAccountMembershipUpdateMapper): StandardPromise<DataSmartAccountMembership> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDataSmartAccountMembershipBatch = async (params: DataSmartAccountMembershipUpdateMapper[]): StandardPromise<DataSmartAccountMembership[]> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDataSmartAccountMembership = async (id: string): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDataSmartAccountMembershipBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/data/smart/account/membership/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
