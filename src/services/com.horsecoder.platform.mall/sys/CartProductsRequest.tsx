import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CartProducts } from '@/types/com.horsecoder.platform.mall/sys/CartProducts';

export interface CartProductsFilterMapper {
  id?: string;
  cartId?: string;
  cartIdIn?: string[];
  productId?: string;
  productIdIn?: string[];
  productQuantity?: number;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface CartProductsPostMapper {
  cartId: string;
  productId: string;
  productQuantity?: number;
}

export interface CartProductsUpdateMapper {
  id: string;
  cartId?: string;
  productId?: string;
  productQuantity?: number;
}

export const getCartProductsSimple = async (id: string): StandardPromise<CartProducts> => {
  return request('/mall-mall/api/sys/cart/products/single/simple', {
    params: { id },
  });
};

export const getCartProducts = async (id: string): StandardPromise<CartProducts> => {
  return request('/mall-mall/api/sys/cart/products/single', {
    params: { id },
  });
};

export const getCartProductsList = async (params: CartProductsFilterMapper): StandardPromise<CartProducts[]> => {
  return request('/mall-mall/api/sys/cart/products/filter', { params });
};

export const getCartProductsDetailList = async (params: CartProductsFilterMapper): StandardPromise<CartProducts[]> => {
  return request('/mall-mall/api/sys/cart/products/filter/detail', { params });
};

export const postCartProducts = async (params: CartProductsPostMapper): StandardPromise<CartProducts> => {
  return request('/mall-mall/api/sys/cart/products', {
    method: 'POST',
    data: { ...params },
  });
};

export const postCartProductsBatch = async (params: CartProductsPostMapper[]): StandardPromise<CartProducts[]> => {
  return request('/mall-mall/api/sys/cart/products/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateCartProducts = async (params: CartProductsUpdateMapper): StandardPromise<CartProducts> => {
  return request('/mall-mall/api/sys/cart/products', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateCartProductsBatch = async (params: CartProductsUpdateMapper[]): StandardPromise<CartProducts[]> => {
  return request('/mall-mall/api/sys/cart/products/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putCartProducts = async (params: CartProductsUpdateMapper): StandardPromise<CartProducts> => {
  return request('/mall-mall/api/sys/cart/products', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putCartProductsBatch = async (params: CartProductsUpdateMapper[]): StandardPromise<CartProducts[]> => {
  return request('/mall-mall/api/sys/cart/products/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteCartProducts = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/cart/products', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteCartProductsBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/cart/products/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
