import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { LandingInformation } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/LandingInformation';

export interface LandingInformationFilterMapper {
  id?: string;
  name?: string;
  nameIn?: string[];
  nameLike?: string;
  phone?: string;
  phoneIn?: string[];
  phoneLike?: string;
  email?: string;
  emailLike?: string;
  industry?: string;
  industryLike?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface LandingInformationPostMapper {
  name: string;
  phone: string;
  email: string;
  industry: string;
}

export interface LandingInformationUpdateMapper {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
  industry?: string;
}

export const getLandingInformationSimple = async (id: string): StandardPromise<LandingInformation> => {
  return request('/mall-aiMarketing/api/sys/landing/information/single/simple', {
    params: { id },
  });
};

export const getLandingInformation = async (id: string): StandardPromise<LandingInformation> => {
  return request('/mall-aiMarketing/api/sys/landing/information/single', {
    params: { id },
  });
};

export const getLandingInformationList = async (params: LandingInformationFilterMapper): StandardPromise<LandingInformation[]> => {
  return request('/mall-aiMarketing/api/sys/landing/information/filter', { params });
};

export const getLandingInformationDetailList = async (params: LandingInformationFilterMapper): StandardPromise<LandingInformation[]> => {
  return request('/mall-aiMarketing/api/sys/landing/information/filter/detail', { params });
};

export const postLandingInformation = async (params: LandingInformationPostMapper): StandardPromise<LandingInformation> => {
  return request('/mall-aiMarketing/api/sys/landing/information', {
    method: 'POST',
    data: { ...params },
  });
};

export const postLandingInformationBatch = async (params: LandingInformationPostMapper[]): StandardPromise<LandingInformation[]> => {
  return request('/mall-aiMarketing/api/sys/landing/information/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateLandingInformation = async (params: LandingInformationUpdateMapper): StandardPromise<LandingInformation> => {
  return request('/mall-aiMarketing/api/sys/landing/information', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateLandingInformationBatch = async (params: LandingInformationUpdateMapper[]): StandardPromise<LandingInformation[]> => {
  return request('/mall-aiMarketing/api/sys/landing/information/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putLandingInformation = async (params: LandingInformationUpdateMapper): StandardPromise<LandingInformation> => {
  return request('/mall-aiMarketing/api/sys/landing/information', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putLandingInformationBatch = async (params: LandingInformationUpdateMapper[]): StandardPromise<LandingInformation[]> => {
  return request('/mall-aiMarketing/api/sys/landing/information/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteLandingInformation = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/landing/information', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteLandingInformationBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/landing/information/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
