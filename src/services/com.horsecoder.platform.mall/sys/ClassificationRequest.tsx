import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Classification } from '@/types/com.horsecoder.platform.mall/sys/Classification';

export interface ClassificationFilterMapper {
  id?: string;
  name?: string;
  nameLike?: string;
  level?: number;
  levelIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface ClassificationPostMapper {
  name: string;
  level?: number;
}

export interface ClassificationUpdateMapper {
  id: string;
  name?: string;
  level?: number;
}

export const getClassificationSimple = async (id: string): StandardPromise<Classification> => {
  return request('/mall-mall/api/sys/classification/single/simple', {
    params: { id },
  });
};

export const getClassification = async (id: string): StandardPromise<Classification> => {
  return request('/mall-mall/api/sys/classification/single', {
    params: { id },
  });
};

export const getClassificationList = async (params: ClassificationFilterMapper): StandardPromise<Classification[]> => {
  return request('/mall-mall/api/sys/classification/filter', { params });
};

export const getClassificationDetailList = async (params: ClassificationFilterMapper): StandardPromise<Classification[]> => {
  return request('/mall-mall/api/sys/classification/filter/detail', { params });
};

export const postClassification = async (params: ClassificationPostMapper): StandardPromise<Classification> => {
  return request('/mall-mall/api/sys/classification', {
    method: 'POST',
    data: { ...params },
  });
};

export const postClassificationBatch = async (params: ClassificationPostMapper[]): StandardPromise<Classification[]> => {
  return request('/mall-mall/api/sys/classification/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateClassification = async (params: ClassificationUpdateMapper): StandardPromise<Classification> => {
  return request('/mall-mall/api/sys/classification', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateClassificationBatch = async (params: ClassificationUpdateMapper[]): StandardPromise<Classification[]> => {
  return request('/mall-mall/api/sys/classification/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putClassification = async (params: ClassificationUpdateMapper): StandardPromise<Classification> => {
  return request('/mall-mall/api/sys/classification', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putClassificationBatch = async (params: ClassificationUpdateMapper[]): StandardPromise<Classification[]> => {
  return request('/mall-mall/api/sys/classification/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteClassification = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/classification', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteClassificationBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/classification/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
