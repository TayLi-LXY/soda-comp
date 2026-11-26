import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelVersion } from '@/types/com.horsecoder.model/auto/ModelVersion';

export interface ModelVersionFilterMapper {
  id?: string;
  modelId?: string;
  modelIdIn?: string[];
  version?: string;
  versionIn?: string[];
  preVersion?: string;
  preVersionIn?: string[];
  ifNewest?: number;
  ifNewestIn?: number[];
  organizeId?: string;
  organizeIdIn?: string[];
  creatorId?: string;
  creatorIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface ModelVersionPostMapper {
  modelId: string;
  version: string;
  preVersion?: string;
  ifNewest?: number;
  organizeId: string;
  creatorId: string;
}

export interface ModelVersionUpdateMapper {
  id: string;
  modelId?: string;
  version?: string;
  preVersion?: string;
  ifNewest?: number;
  organizeId?: string;
  creatorId?: string;
}

export const getModelVersionSimple = async (id: string): StandardPromise<ModelVersion> => {
  return request('/horsecoder-model/api/auto/model/version/single/simple', {
    params: { id },
  });
};

export const getModelVersion = async (id: string): StandardPromise<ModelVersion> => {
  return request('/horsecoder-model/api/auto/model/version/single', {
    params: { id },
  });
};

export const getModelVersionList = async (params: ModelVersionFilterMapper): StandardPromise<ModelVersion[]> => {
  return request('/horsecoder-model/api/auto/model/version/filter', { params });
};

export const getModelVersionDetailList = async (params: ModelVersionFilterMapper): StandardPromise<ModelVersion[]> => {
  return request('/horsecoder-model/api/auto/model/version/filter/detail', { params });
};

export const postModelVersion = async (params: ModelVersionPostMapper): StandardPromise<ModelVersion> => {
  return request('/horsecoder-model/api/auto/model/version', {
    method: 'POST',
    data: { ...params },
  });
};

export const postModelVersionBatch = async (params: ModelVersionPostMapper[]): StandardPromise<ModelVersion[]> => {
  return request('/horsecoder-model/api/auto/model/version/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateModelVersion = async (params: ModelVersionUpdateMapper): StandardPromise<ModelVersion> => {
  return request('/horsecoder-model/api/auto/model/version', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateModelVersionBatch = async (params: ModelVersionUpdateMapper[]): StandardPromise<ModelVersion[]> => {
  return request('/horsecoder-model/api/auto/model/version/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putModelVersion = async (params: ModelVersionUpdateMapper): StandardPromise<ModelVersion> => {
  return request('/horsecoder-model/api/auto/model/version', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putModelVersionBatch = async (params: ModelVersionUpdateMapper[]): StandardPromise<ModelVersion[]> => {
  return request('/horsecoder-model/api/auto/model/version/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteModelVersion = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/version', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteModelVersionBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/version/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
