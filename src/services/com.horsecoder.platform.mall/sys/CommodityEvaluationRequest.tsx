import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CommodityEvaluation } from '@/types/com.horsecoder.platform.mall/sys/CommodityEvaluation';

export interface CommodityEvaluationFilterMapper {
  id?: string;
  commodityId?: string;
  commodityIdIn?: string[];
  content?: string;
  contentLike?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface CommodityEvaluationPostMapper {
  commodityId: string;
  content: string;
}

export interface CommodityEvaluationUpdateMapper {
  id: string;
  commodityId?: string;
  content?: string;
}

export const getCommodityEvaluationSimple = async (id: string): StandardPromise<CommodityEvaluation> => {
  return request('/mall-mall/api/sys/commodity/evaluation/single/simple', {
    params: { id },
  });
};

export const getCommodityEvaluation = async (id: string): StandardPromise<CommodityEvaluation> => {
  return request('/mall-mall/api/sys/commodity/evaluation/single', {
    params: { id },
  });
};

export const getCommodityEvaluationList = async (params: CommodityEvaluationFilterMapper): StandardPromise<CommodityEvaluation[]> => {
  return request('/mall-mall/api/sys/commodity/evaluation/filter', { params });
};

export const getCommodityEvaluationDetailList = async (params: CommodityEvaluationFilterMapper): StandardPromise<CommodityEvaluation[]> => {
  return request('/mall-mall/api/sys/commodity/evaluation/filter/detail', { params });
};

export const postCommodityEvaluation = async (params: CommodityEvaluationPostMapper): StandardPromise<CommodityEvaluation> => {
  return request('/mall-mall/api/sys/commodity/evaluation', {
    method: 'POST',
    data: { ...params },
  });
};

export const postCommodityEvaluationBatch = async (params: CommodityEvaluationPostMapper[]): StandardPromise<CommodityEvaluation[]> => {
  return request('/mall-mall/api/sys/commodity/evaluation/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateCommodityEvaluation = async (params: CommodityEvaluationUpdateMapper): StandardPromise<CommodityEvaluation> => {
  return request('/mall-mall/api/sys/commodity/evaluation', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateCommodityEvaluationBatch = async (params: CommodityEvaluationUpdateMapper[]): StandardPromise<CommodityEvaluation[]> => {
  return request('/mall-mall/api/sys/commodity/evaluation/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putCommodityEvaluation = async (params: CommodityEvaluationUpdateMapper): StandardPromise<CommodityEvaluation> => {
  return request('/mall-mall/api/sys/commodity/evaluation', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putCommodityEvaluationBatch = async (params: CommodityEvaluationUpdateMapper[]): StandardPromise<CommodityEvaluation[]> => {
  return request('/mall-mall/api/sys/commodity/evaluation/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteCommodityEvaluation = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/commodity/evaluation', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteCommodityEvaluationBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/commodity/evaluation/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
