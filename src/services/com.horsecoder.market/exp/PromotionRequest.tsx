import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Promotion } from '@/types/com.horsecoder.market/exp/Promotion';

export interface PromotionFilterMapper {
  id?: string;
  name?: string;
  nameIn?: string[];
  activityDescription?: string;
  activityDescriptionLike?: string;
  startTimeFrom?: number;
  startTimeTo?: number;
  endTimeFrom?: number;
  endTimeTo?: number;
  activityChannels?: number;
  activityChannelsIn?: number[];
  activityPort?: number;
  activityPortIn?: number[];
  applicableScope?: number;
  applicableScopeIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface PromotionPostMapper {
  name?: string;
  activityDescription: string;
  startTime: number;
  endTime: number;
  activityChannels?: number;
  activityPort?: number;
  applicableScope?: number;
}

export interface PromotionUpdateMapper {
  id: string;
  name?: string;
  activityDescription?: string;
  startTime?: number;
  endTime?: number;
  activityChannels?: number;
  activityPort?: number;
  applicableScope?: number;
}

export const getPromotionSimple = async (id: string): StandardPromise<Promotion> => {
  return request('/horsecoder-market/api/exp/promotion/single/simple', {
    params: { id },
  });
};

export const getPromotion = async (id: string): StandardPromise<Promotion> => {
  return request('/horsecoder-market/api/exp/promotion/single', {
    params: { id },
  });
};

export const getPromotionList = async (params: PromotionFilterMapper): StandardPromise<Promotion[]> => {
  return request('/horsecoder-market/api/exp/promotion/filter', { params });
};

export const getPromotionDetailList = async (params: PromotionFilterMapper): StandardPromise<Promotion[]> => {
  return request('/horsecoder-market/api/exp/promotion/filter/detail', { params });
};

export const postPromotion = async (params: PromotionPostMapper): StandardPromise<Promotion> => {
  return request('/horsecoder-market/api/exp/promotion', {
    method: 'POST',
    data: { ...params },
  });
};

export const postPromotionBatch = async (params: PromotionPostMapper[]): StandardPromise<Promotion[]> => {
  return request('/horsecoder-market/api/exp/promotion/batch', {
    method: 'POST',
    data: params,
  });
};

export const updatePromotion = async (params: PromotionUpdateMapper): StandardPromise<Promotion> => {
  return request('/horsecoder-market/api/exp/promotion', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updatePromotionBatch = async (params: PromotionUpdateMapper[]): StandardPromise<Promotion[]> => {
  return request('/horsecoder-market/api/exp/promotion/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putPromotion = async (params: PromotionUpdateMapper): StandardPromise<Promotion> => {
  return request('/horsecoder-market/api/exp/promotion', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putPromotionBatch = async (params: PromotionUpdateMapper[]): StandardPromise<Promotion[]> => {
  return request('/horsecoder-market/api/exp/promotion/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deletePromotion = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/promotion', {
    method: 'DELETE',
    params: { id },
  });
};

export const deletePromotionBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/promotion/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
