import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ProductDetails } from '@/types/com.horsecoder.platform.mall/sys/ProductDetails';

export interface ProductDetailsFilterMapper {
  id?: string;
  commodityId?: string;
  commodityIdIn?: string[];
  detailType?: number;
  detailTypeIn?: number[];
  detailContent?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface ProductDetailsPostMapper {
  commodityId: string;
  detailType: number;
  detailContent: string;
}

export interface ProductDetailsUpdateMapper {
  id: string;
  commodityId?: string;
  detailType?: number;
  detailContent?: string;
}

export const getProductDetailsSimple = async (id: string): StandardPromise<ProductDetails> => {
  return request('/mall-mall/api/sys/product/details/single/simple', {
    params: { id },
  });
};

export const getProductDetails = async (id: string): StandardPromise<ProductDetails> => {
  return request('/mall-mall/api/sys/product/details/single', {
    params: { id },
  });
};

export const getProductDetailsList = async (params: ProductDetailsFilterMapper): StandardPromise<ProductDetails[]> => {
  return request('/mall-mall/api/sys/product/details/filter', { params });
};

export const getProductDetailsDetailList = async (params: ProductDetailsFilterMapper): StandardPromise<ProductDetails[]> => {
  return request('/mall-mall/api/sys/product/details/filter/detail', { params });
};

export const postProductDetails = async (params: ProductDetailsPostMapper): StandardPromise<ProductDetails> => {
  return request('/mall-mall/api/sys/product/details', {
    method: 'POST',
    data: { ...params },
  });
};

export const postProductDetailsBatch = async (params: ProductDetailsPostMapper[]): StandardPromise<ProductDetails[]> => {
  return request('/mall-mall/api/sys/product/details/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateProductDetails = async (params: ProductDetailsUpdateMapper): StandardPromise<ProductDetails> => {
  return request('/mall-mall/api/sys/product/details', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateProductDetailsBatch = async (params: ProductDetailsUpdateMapper[]): StandardPromise<ProductDetails[]> => {
  return request('/mall-mall/api/sys/product/details/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putProductDetails = async (params: ProductDetailsUpdateMapper): StandardPromise<ProductDetails> => {
  return request('/mall-mall/api/sys/product/details', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putProductDetailsBatch = async (params: ProductDetailsUpdateMapper[]): StandardPromise<ProductDetails[]> => {
  return request('/mall-mall/api/sys/product/details/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteProductDetails = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/product/details', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteProductDetailsBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/product/details/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
