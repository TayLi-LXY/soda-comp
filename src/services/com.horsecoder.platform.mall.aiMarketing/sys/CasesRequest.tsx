import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Cases } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/Cases';

export interface CasesFilterMapper {
  id?: string;
  type?: string;
  typeIn?: string[];
  videoUrl?: string;
  modelTemplateId?: string;
  modelTemplateIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface CasesPostMapper {
  type: string;
  videoUrl?: string;
  modelTemplateId: string;
}

export interface CasesUpdateMapper {
  id: string;
  type?: string;
  videoUrl?: string;
  modelTemplateId?: string;
}

export const getCasesSimple = async (id: string): StandardPromise<Cases> => {
  return request('/mall-aiMarketing/api/sys/cases/single/simple', {
    params: { id },
  });
};

export const getCases = async (id: string): StandardPromise<Cases> => {
  return request('/mall-aiMarketing/api/sys/cases/single', {
    params: { id },
  });
};

export const getCasesList = async (params: CasesFilterMapper): StandardPromise<Cases[]> => {
  return request('/mall-aiMarketing/api/sys/cases/filter', { params });
};

export const getCasesDetailList = async (params: CasesFilterMapper): StandardPromise<Cases[]> => {
  return request('/mall-aiMarketing/api/sys/cases/filter/detail', { params });
};

export const postCases = async (params: CasesPostMapper): StandardPromise<Cases> => {
  return request('/mall-aiMarketing/api/sys/cases', {
    method: 'POST',
    data: { ...params },
  });
};

export const postCasesBatch = async (params: CasesPostMapper[]): StandardPromise<Cases[]> => {
  return request('/mall-aiMarketing/api/sys/cases/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateCases = async (params: CasesUpdateMapper): StandardPromise<Cases> => {
  return request('/mall-aiMarketing/api/sys/cases', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateCasesBatch = async (params: CasesUpdateMapper[]): StandardPromise<Cases[]> => {
  return request('/mall-aiMarketing/api/sys/cases/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putCases = async (params: CasesUpdateMapper): StandardPromise<Cases> => {
  return request('/mall-aiMarketing/api/sys/cases', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putCasesBatch = async (params: CasesUpdateMapper[]): StandardPromise<Cases[]> => {
  return request('/mall-aiMarketing/api/sys/cases/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteCases = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/cases', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteCasesBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/cases/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
