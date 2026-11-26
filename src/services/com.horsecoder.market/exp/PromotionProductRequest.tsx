import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PromotionProduct } from '@/types/com.horsecoder.market/exp/PromotionProduct';

export interface PromotionProductFilterMapper {
  id?: string;
  productId?: string;
  productIdIn?: string[];
  promotionId?: string;
  promotionIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface PromotionProductPostMapper {
  productId?: string;
  promotionId?: string;
}

export interface PromotionProductUpdateMapper {
  id: string;
  productId?: string;
  promotionId?: string;
}

export const getPromotionProductSimple = async (id: string): StandardPromise<PromotionProduct> => {
  return request('/horsecoder-market/api/exp/promotion/product/single/simple', {
    params: { id },
  });
};

export const getPromotionProduct = async (id: string): StandardPromise<PromotionProduct> => {
  return request('/horsecoder-market/api/exp/promotion/product/single', {
    params: { id },
  });
};

export const getPromotionProductList = async (params: PromotionProductFilterMapper): StandardPromise<PromotionProduct[]> => {
  return request('/horsecoder-market/api/exp/promotion/product/filter', { params });
};

export const getPromotionProductDetailList = async (params: PromotionProductFilterMapper): StandardPromise<PromotionProduct[]> => {
  return request('/horsecoder-market/api/exp/promotion/product/filter/detail', { params });
};

export const postPromotionProduct = async (params: PromotionProductPostMapper): StandardPromise<PromotionProduct> => {
  return request('/horsecoder-market/api/exp/promotion/product', {
    method: 'POST',
    data: { ...params },
  });
};

export const postPromotionProductBatch = async (params: PromotionProductPostMapper[]): StandardPromise<PromotionProduct[]> => {
  return request('/horsecoder-market/api/exp/promotion/product/batch', {
    method: 'POST',
    data: params,
  });
};

export const updatePromotionProduct = async (params: PromotionProductUpdateMapper): StandardPromise<PromotionProduct> => {
  return request('/horsecoder-market/api/exp/promotion/product', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updatePromotionProductBatch = async (params: PromotionProductUpdateMapper[]): StandardPromise<PromotionProduct[]> => {
  return request('/horsecoder-market/api/exp/promotion/product/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putPromotionProduct = async (params: PromotionProductUpdateMapper): StandardPromise<PromotionProduct> => {
  return request('/horsecoder-market/api/exp/promotion/product', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putPromotionProductBatch = async (params: PromotionProductUpdateMapper[]): StandardPromise<PromotionProduct[]> => {
  return request('/horsecoder-market/api/exp/promotion/product/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deletePromotionProduct = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/promotion/product', {
    method: 'DELETE',
    params: { id },
  });
};

export const deletePromotionProductBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/promotion/product/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
