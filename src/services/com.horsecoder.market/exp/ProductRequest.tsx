import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Product } from '@/types/com.horsecoder.market/exp/Product';

export interface ProductFilterMapper {
  id?: string;
  idIn?: string[];
  productNumber?: string;
  productNumberIn?: string[];
  productName?: string;
  productNameLike?: string;
  periodType?: number;
  periodTypeIn?: number[];
  price?: number;
  detail?: string;
  listingAccountId?: string;
  listingAccountIdIn?: string[];
  categoryId?: string;
  categoryIdIn?: string[];
  productType?: string;
  productTypeLike?: string;
  imageUrl?: string;
  inventory?: number;
  lockOrderInventory?: number;
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

export interface ProductPostMapper {
  productNumber: string;
  productName: string;
  periodType: number;
  price: number;
  detail: string;
  listingAccountId?: string;
  categoryId?: string;
  productType: string;
  imageUrl?: string;
  inventory?: number;
  lockOrderInventory?: number;
  ifListed?: number;
}

export interface ProductUpdateMapper {
  id: string;
  productNumber?: string;
  productName?: string;
  periodType?: number;
  price?: number;
  detail?: string;
  listingAccountId?: string;
  categoryId?: string;
  productType?: string;
  imageUrl?: string;
  inventory?: number;
  lockOrderInventory?: number;
  ifListed?: number;
}

export const getProductSimple = async (id: string): StandardPromise<Product> => {
  return request('/horsecoder-market/api/exp/product/single/simple', {
    params: { id },
  });
};

export const getProduct = async (id: string): StandardPromise<Product> => {
  return request('/horsecoder-market/api/exp/product/single', {
    params: { id },
  });
};

export const getProductList = async (params: ProductFilterMapper): StandardPromise<Product[]> => {
  return request('/horsecoder-market/api/exp/product/filter', { params });
};

export const getProductDetailList = async (params: ProductFilterMapper): StandardPromise<Product[]> => {
  return request('/horsecoder-market/api/exp/product/filter/detail', { params });
};

export const postProduct = async (params: ProductPostMapper): StandardPromise<Product> => {
  return request('/horsecoder-market/api/exp/product', {
    method: 'POST',
    data: { ...params },
  });
};

export const postProductBatch = async (params: ProductPostMapper[]): StandardPromise<Product[]> => {
  return request('/horsecoder-market/api/exp/product/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateProduct = async (params: ProductUpdateMapper): StandardPromise<Product> => {
  return request('/horsecoder-market/api/exp/product', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateProductBatch = async (params: ProductUpdateMapper[]): StandardPromise<Product[]> => {
  return request('/horsecoder-market/api/exp/product/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putProduct = async (params: ProductUpdateMapper): StandardPromise<Product> => {
  return request('/horsecoder-market/api/exp/product', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putProductBatch = async (params: ProductUpdateMapper[]): StandardPromise<Product[]> => {
  return request('/horsecoder-market/api/exp/product/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteProduct = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/product', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteProductBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/product/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
