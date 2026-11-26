import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Cart } from '@/types/com.horsecoder.platform.mall/sys/Cart';

export interface CartFilterMapper {
  id?: string;
  userId?: string;
  userIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface CartPostMapper {
  userId: string;
}

export interface CartUpdateMapper {
  id: string;
  userId?: string;
}

export const getCartSimple = async (id: string): StandardPromise<Cart> => {
  return request('/mall-mall/api/sys/cart/single/simple', {
    params: { id },
  });
};

export const getCart = async (id: string): StandardPromise<Cart> => {
  return request('/mall-mall/api/sys/cart/single', {
    params: { id },
  });
};

export const getCartList = async (params: CartFilterMapper): StandardPromise<Cart[]> => {
  return request('/mall-mall/api/sys/cart/filter', { params });
};

export const getCartDetailList = async (params: CartFilterMapper): StandardPromise<Cart[]> => {
  return request('/mall-mall/api/sys/cart/filter/detail', { params });
};

export const postCart = async (params: CartPostMapper): StandardPromise<Cart> => {
  return request('/mall-mall/api/sys/cart', {
    method: 'POST',
    data: { ...params },
  });
};

export const postCartBatch = async (params: CartPostMapper[]): StandardPromise<Cart[]> => {
  return request('/mall-mall/api/sys/cart/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateCart = async (params: CartUpdateMapper): StandardPromise<Cart> => {
  return request('/mall-mall/api/sys/cart', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateCartBatch = async (params: CartUpdateMapper[]): StandardPromise<Cart[]> => {
  return request('/mall-mall/api/sys/cart/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putCart = async (params: CartUpdateMapper): StandardPromise<Cart> => {
  return request('/mall-mall/api/sys/cart', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putCartBatch = async (params: CartUpdateMapper[]): StandardPromise<Cart[]> => {
  return request('/mall-mall/api/sys/cart/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteCart = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/cart', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteCartBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/cart/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
