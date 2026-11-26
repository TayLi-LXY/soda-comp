import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CouponTemplate } from '@/types/com.horsecoder.market/exp/CouponTemplate';

export interface CouponTemplateFilterMapper {
  id?: string;
  publisherId?: string;
  publisherIdIn?: string[];
  couponName?: string;
  description?: string;
  picture?: string;
  couponType?: number;
  couponTypeIn?: number[];
  achievePrice?: number;
  typeLimit?: string;
  typeLimitIn?: string[];
  restrictionType?: number;
  restrictionTypeIn?: number[];
  dateLimitType?: number;
  dateLimitTypeIn?: number[];
  dateLimitLowFrom?: number;
  dateLimitLowTo?: number;
  dateLimitUpFrom?: number;
  dateLimitUpTo?: number;
  dateLimit?: number;
  total?: number;
  remain?: number;
  targetGroup?: number;
  exclusiveType?: number;
  exclusiveTypeIn?: number[];
  exclusiveLimit?: string;
  exclusiveLimitIn?: string[];
  couponAmount?: number;
  couponDiscountRatio?: number;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface CouponTemplatePostMapper {
  publisherId: string;
  couponName: string;
  description: string;
  picture?: string;
  couponType: number;
  achievePrice: number;
  typeLimit?: string;
  restrictionType: number;
  dateLimitType: number;
  dateLimitLow?: number;
  dateLimitUp?: number;
  dateLimit?: number;
  total: number;
  remain: number;
  targetGroup?: number;
  exclusiveType: number;
  exclusiveLimit?: string;
  couponAmount?: number;
  couponDiscountRatio?: number;
}

export interface CouponTemplateUpdateMapper {
  id: string;
  publisherId?: string;
  couponName?: string;
  description?: string;
  picture?: string;
  couponType?: number;
  achievePrice?: number;
  typeLimit?: string;
  restrictionType?: number;
  dateLimitType?: number;
  dateLimitLow?: number;
  dateLimitUp?: number;
  dateLimit?: number;
  total?: number;
  remain?: number;
  targetGroup?: number;
  exclusiveType?: number;
  exclusiveLimit?: string;
  couponAmount?: number;
  couponDiscountRatio?: number;
}

export const getCouponTemplateSimple = async (id: string): StandardPromise<CouponTemplate> => {
  return request('/horsecoder-market/api/exp/coupon/template/single/simple', {
    params: { id },
  });
};

export const getCouponTemplate = async (id: string): StandardPromise<CouponTemplate> => {
  return request('/horsecoder-market/api/exp/coupon/template/single', {
    params: { id },
  });
};

export const getCouponTemplateList = async (params: CouponTemplateFilterMapper): StandardPromise<CouponTemplate[]> => {
  return request('/horsecoder-market/api/exp/coupon/template/filter', { params });
};

export const getCouponTemplateDetailList = async (params: CouponTemplateFilterMapper): StandardPromise<CouponTemplate[]> => {
  return request('/horsecoder-market/api/exp/coupon/template/filter/detail', { params });
};

export const postCouponTemplate = async (params: CouponTemplatePostMapper): StandardPromise<CouponTemplate> => {
  return request('/horsecoder-market/api/exp/coupon/template', {
    method: 'POST',
    data: { ...params },
  });
};

export const postCouponTemplateBatch = async (params: CouponTemplatePostMapper[]): StandardPromise<CouponTemplate[]> => {
  return request('/horsecoder-market/api/exp/coupon/template/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateCouponTemplate = async (params: CouponTemplateUpdateMapper): StandardPromise<CouponTemplate> => {
  return request('/horsecoder-market/api/exp/coupon/template', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateCouponTemplateBatch = async (params: CouponTemplateUpdateMapper[]): StandardPromise<CouponTemplate[]> => {
  return request('/horsecoder-market/api/exp/coupon/template/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putCouponTemplate = async (params: CouponTemplateUpdateMapper): StandardPromise<CouponTemplate> => {
  return request('/horsecoder-market/api/exp/coupon/template', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putCouponTemplateBatch = async (params: CouponTemplateUpdateMapper[]): StandardPromise<CouponTemplate[]> => {
  return request('/horsecoder-market/api/exp/coupon/template/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteCouponTemplate = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/coupon/template', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteCouponTemplateBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/coupon/template/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
