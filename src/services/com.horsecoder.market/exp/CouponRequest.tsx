import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Coupon } from '@/types/com.horsecoder.market/exp/Coupon';

export interface CouponFilterMapper {
  id?: string;
  couponTemplateId?: string;
  accountId?: string;
  accountIdIn?: string[];
  status?: number;
  statusIn?: number[];
  dateLimitLowFrom?: number;
  dateLimitLowTo?: number;
  dateLimitUpFrom?: number;
  dateLimitUpTo?: number;
  useNumber?: number;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface CouponPostMapper {
  couponTemplateId: string;
  accountId: string;
  status: number;
  dateLimitLow: number;
  dateLimitUp: number;
  useNumber?: number;
}

export interface CouponUpdateMapper {
  id: string;
  couponTemplateId?: string;
  accountId?: string;
  status?: number;
  dateLimitLow?: number;
  dateLimitUp?: number;
  useNumber?: number;
}

export const getCouponSimple = async (id: string): StandardPromise<Coupon> => {
  return request('/horsecoder-market/api/exp/coupon/single/simple', {
    params: { id },
  });
};

export const getCoupon = async (id: string): StandardPromise<Coupon> => {
  return request('/horsecoder-market/api/exp/coupon/single', {
    params: { id },
  });
};

export const getCouponList = async (params: CouponFilterMapper): StandardPromise<Coupon[]> => {
  return request('/horsecoder-market/api/exp/coupon/filter', { params });
};

export const getCouponDetailList = async (params: CouponFilterMapper): StandardPromise<Coupon[]> => {
  return request('/horsecoder-market/api/exp/coupon/filter/detail', { params });
};

export const postCoupon = async (params: CouponPostMapper): StandardPromise<Coupon> => {
  return request('/horsecoder-market/api/exp/coupon', {
    method: 'POST',
    data: { ...params },
  });
};

export const postCouponBatch = async (params: CouponPostMapper[]): StandardPromise<Coupon[]> => {
  return request('/horsecoder-market/api/exp/coupon/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateCoupon = async (params: CouponUpdateMapper): StandardPromise<Coupon> => {
  return request('/horsecoder-market/api/exp/coupon', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateCouponBatch = async (params: CouponUpdateMapper[]): StandardPromise<Coupon[]> => {
  return request('/horsecoder-market/api/exp/coupon/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putCoupon = async (params: CouponUpdateMapper): StandardPromise<Coupon> => {
  return request('/horsecoder-market/api/exp/coupon', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putCouponBatch = async (params: CouponUpdateMapper[]): StandardPromise<Coupon[]> => {
  return request('/horsecoder-market/api/exp/coupon/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteCoupon = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/coupon', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteCouponBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/coupon/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
