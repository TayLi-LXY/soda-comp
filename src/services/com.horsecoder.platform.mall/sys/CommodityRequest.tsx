import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Commodity } from '@/types/com.horsecoder.platform.mall/sys/Commodity';

export interface CommodityFilterMapper {
  id?: string;
  productNumber?: string;
  productNumberLike?: string;
  productName?: string;
  productNameLike?: string;
  displayImageUrl?: string;
  classificationId?: string;
  classificationIdIn?: string[];
  productIntroduction?: string;
  ifListed?: number;
  ifListedIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface CommodityPostMapper {
  productNumber: string;
  productName: string;
  displayImageUrl: string;
  classificationId: string;
  productIntroduction?: string;
  ifListed?: number;
}

export interface CommodityUpdateMapper {
  id: string;
  productNumber?: string;
  productName?: string;
  displayImageUrl?: string;
  classificationId?: string;
  productIntroduction?: string;
  ifListed?: number;
}

export const getCommoditySimple = async (id: string): StandardPromise<Commodity> => {
  return request('/mall-mall/api/sys/commodity/single/simple', {
    params: { id },
  });
};

export const getCommodity = async (id: string): StandardPromise<Commodity> => {
  return request('/mall-mall/api/sys/commodity/single', {
    params: { id },
  });
};

export const getCommodityList = async (params: CommodityFilterMapper): StandardPromise<Commodity[]> => {
  return request('/mall-mall/api/sys/commodity/filter', { params });
};

export const getCommodityDetailList = async (params: CommodityFilterMapper): StandardPromise<Commodity[]> => {
  return request('/mall-mall/api/sys/commodity/filter/detail', { params });
};

export const postCommodity = async (params: CommodityPostMapper): StandardPromise<Commodity> => {
  return request('/mall-mall/api/sys/commodity', {
    method: 'POST',
    data: { ...params },
  });
};

export const postCommodityBatch = async (params: CommodityPostMapper[]): StandardPromise<Commodity[]> => {
  return request('/mall-mall/api/sys/commodity/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateCommodity = async (params: CommodityUpdateMapper): StandardPromise<Commodity> => {
  return request('/mall-mall/api/sys/commodity', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateCommodityBatch = async (params: CommodityUpdateMapper[]): StandardPromise<Commodity[]> => {
  return request('/mall-mall/api/sys/commodity/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putCommodity = async (params: CommodityUpdateMapper): StandardPromise<Commodity> => {
  return request('/mall-mall/api/sys/commodity', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putCommodityBatch = async (params: CommodityUpdateMapper[]): StandardPromise<Commodity[]> => {
  return request('/mall-mall/api/sys/commodity/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteCommodity = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/commodity', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteCommodityBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/commodity/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
