import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CommodityProduct } from '@/types/com.horsecoder.platform.mall/sys/CommodityProduct';

export interface CommodityProductFilterMapper {
  id?: string;
  commodityId?: string;
  commodityIdIn?: string[];
  productId?: string;
  productIdIn?: string[];
  imageUrl?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface CommodityProductPostMapper {
  commodityId: string;
  productId: string;
  imageUrl?: string;
}

export interface CommodityProductUpdateMapper {
  id: string;
  commodityId?: string;
  productId?: string;
  imageUrl?: string;
}

export const getCommodityProductSimple = async (id: string): StandardPromise<CommodityProduct> => {
  return request('/mall-mall/api/sys/commodity/product/single/simple', {
    params: { id },
  });
};

export const getCommodityProduct = async (id: string): StandardPromise<CommodityProduct> => {
  return request('/mall-mall/api/sys/commodity/product/single', {
    params: { id },
  });
};

export const getCommodityProductList = async (params: CommodityProductFilterMapper): StandardPromise<CommodityProduct[]> => {
  return request('/mall-mall/api/sys/commodity/product/filter', { params });
};

export const getCommodityProductDetailList = async (params: CommodityProductFilterMapper): StandardPromise<CommodityProduct[]> => {
  return request('/mall-mall/api/sys/commodity/product/filter/detail', { params });
};

export const postCommodityProduct = async (params: CommodityProductPostMapper): StandardPromise<CommodityProduct> => {
  return request('/mall-mall/api/sys/commodity/product', {
    method: 'POST',
    data: { ...params },
  });
};

export const postCommodityProductBatch = async (params: CommodityProductPostMapper[]): StandardPromise<CommodityProduct[]> => {
  return request('/mall-mall/api/sys/commodity/product/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateCommodityProduct = async (params: CommodityProductUpdateMapper): StandardPromise<CommodityProduct> => {
  return request('/mall-mall/api/sys/commodity/product', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateCommodityProductBatch = async (params: CommodityProductUpdateMapper[]): StandardPromise<CommodityProduct[]> => {
  return request('/mall-mall/api/sys/commodity/product/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putCommodityProduct = async (params: CommodityProductUpdateMapper): StandardPromise<CommodityProduct> => {
  return request('/mall-mall/api/sys/commodity/product', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putCommodityProductBatch = async (params: CommodityProductUpdateMapper[]): StandardPromise<CommodityProduct[]> => {
  return request('/mall-mall/api/sys/commodity/product/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteCommodityProduct = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/commodity/product', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteCommodityProductBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/commodity/product/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
