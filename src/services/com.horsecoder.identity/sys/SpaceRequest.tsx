import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Space } from '@/types/com.horsecoder.identity/sys/Space';

export interface SpaceFilterMapper {
  id?: string;
  idIn?: string[];
  creatorId?: string;
  type?: string;
  title?: string;
  titleIn?: string[];
  name?: string;
  nameIn?: string[];
  businessType?: string;
  businessScenario?: string;
  businessScale?: string;
  finished?: number;
  organizeId?: string;
  organizeIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface SpacePostMapper {
  creatorId: string;
  type: string;
  title: string;
  name: string;
  businessType?: string;
  businessScenario?: string;
  businessScale?: string;
  organizeId: string;
}

export interface SpaceUpdateMapper {
  id: string;
  creatorId?: string;
  type?: string;
  title?: string;
  name?: string;
  businessType?: string;
  businessScenario?: string;
  businessScale?: string;
  organizeId?: string;
}

export const getSpaceSimple = async (id: string): StandardPromise<Space> => {
  return request('/horsecoder-identity/api/sys/space/single/simple', {
    params: { id },
  });
};

export const getSpace = async (id: string): StandardPromise<Space> => {
  return request('/horsecoder-identity/api/sys/space/single', {
    params: { id },
  });
};

export const getSpaceList = async (params: SpaceFilterMapper): StandardPromise<Space[]> => {
  return request('/horsecoder-identity/api/sys/space/filter', { params });
};

export const getSpaceDetailList = async (params: SpaceFilterMapper): StandardPromise<Space[]> => {
  return request('/horsecoder-identity/api/sys/space/filter/detail', { params });
};

export const postSpace = async (params: SpacePostMapper): StandardPromise<Space> => {
  return request('/horsecoder-identity/api/sys/space', {
    method: 'POST',
    data: { ...params },
  });
};

export const postSpaceBatch = async (params: SpacePostMapper[]): StandardPromise<Space[]> => {
  return request('/horsecoder-identity/api/sys/space/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateSpace = async (params: SpaceUpdateMapper): StandardPromise<Space> => {
  return request('/horsecoder-identity/api/sys/space', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateSpaceBatch = async (params: SpaceUpdateMapper[]): StandardPromise<Space[]> => {
  return request('/horsecoder-identity/api/sys/space/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putSpace = async (params: SpaceUpdateMapper): StandardPromise<Space> => {
  return request('/horsecoder-identity/api/sys/space', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putSpaceBatch = async (params: SpaceUpdateMapper[]): StandardPromise<Space[]> => {
  return request('/horsecoder-identity/api/sys/space/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteSpace = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-identity/api/sys/space', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteSpaceBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-identity/api/sys/space/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
