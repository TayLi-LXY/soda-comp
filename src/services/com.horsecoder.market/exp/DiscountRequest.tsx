import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Discount } from '@/types/com.horsecoder.market/exp/Discount';

export interface DiscountFilterMapper {
  id?: string;
  discountName?: string;
  discountType?: number;
  discountTypeIn?: number[];
  price?: number;
  detail?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DiscountPostMapper {
  discountName: string;
  discountType: number;
  price: number;
  detail?: string;
}

export interface DiscountUpdateMapper {
  id: string;
  discountName?: string;
  discountType?: number;
  price?: number;
  detail?: string;
}

export const getDiscountSimple = async (id: string): StandardPromise<Discount> => {
  return request('/horsecoder-market/api/exp/discount/single/simple', {
    params: { id },
  });
};

export const getDiscount = async (id: string): StandardPromise<Discount> => {
  return request('/horsecoder-market/api/exp/discount/single', {
    params: { id },
  });
};

export const getDiscountList = async (params: DiscountFilterMapper): StandardPromise<Discount[]> => {
  return request('/horsecoder-market/api/exp/discount/filter', { params });
};

export const getDiscountDetailList = async (params: DiscountFilterMapper): StandardPromise<Discount[]> => {
  return request('/horsecoder-market/api/exp/discount/filter/detail', { params });
};

export const postDiscount = async (params: DiscountPostMapper): StandardPromise<Discount> => {
  return request('/horsecoder-market/api/exp/discount', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDiscountBatch = async (params: DiscountPostMapper[]): StandardPromise<Discount[]> => {
  return request('/horsecoder-market/api/exp/discount/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDiscount = async (params: DiscountUpdateMapper): StandardPromise<Discount> => {
  return request('/horsecoder-market/api/exp/discount', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDiscountBatch = async (params: DiscountUpdateMapper[]): StandardPromise<Discount[]> => {
  return request('/horsecoder-market/api/exp/discount/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDiscount = async (params: DiscountUpdateMapper): StandardPromise<Discount> => {
  return request('/horsecoder-market/api/exp/discount', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDiscountBatch = async (params: DiscountUpdateMapper[]): StandardPromise<Discount[]> => {
  return request('/horsecoder-market/api/exp/discount/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDiscount = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/discount', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDiscountBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/discount/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
