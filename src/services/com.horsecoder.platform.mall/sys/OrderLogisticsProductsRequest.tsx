import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrderLogisticsProducts } from '@/types/com.horsecoder.platform.mall/sys/OrderLogisticsProducts';

export interface OrderLogisticsProductsFilterMapper {
  id?: string;
  orderLogisticsId?: string;
  orderLogisticsIdIn?: string[];
  orderProductId?: string;
  orderProductIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrderLogisticsProductsPostMapper {
  orderLogisticsId: string;
  orderProductId: string;
}

export interface OrderLogisticsProductsUpdateMapper {
  id: string;
  orderLogisticsId?: string;
  orderProductId?: string;
}

export const getOrderLogisticsProductsSimple = async (id: string): StandardPromise<OrderLogisticsProducts> => {
  return request('/mall-mall/api/sys/order/logistics/products/single/simple', {
    params: { id },
  });
};

export const getOrderLogisticsProducts = async (id: string): StandardPromise<OrderLogisticsProducts> => {
  return request('/mall-mall/api/sys/order/logistics/products/single', {
    params: { id },
  });
};

export const getOrderLogisticsProductsList = async (params: OrderLogisticsProductsFilterMapper): StandardPromise<OrderLogisticsProducts[]> => {
  return request('/mall-mall/api/sys/order/logistics/products/filter', { params });
};

export const getOrderLogisticsProductsDetailList = async (params: OrderLogisticsProductsFilterMapper): StandardPromise<OrderLogisticsProducts[]> => {
  return request('/mall-mall/api/sys/order/logistics/products/filter/detail', { params });
};

export const postOrderLogisticsProducts = async (params: OrderLogisticsProductsPostMapper): StandardPromise<OrderLogisticsProducts> => {
  return request('/mall-mall/api/sys/order/logistics/products', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrderLogisticsProductsBatch = async (params: OrderLogisticsProductsPostMapper[]): StandardPromise<OrderLogisticsProducts[]> => {
  return request('/mall-mall/api/sys/order/logistics/products/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrderLogisticsProducts = async (params: OrderLogisticsProductsUpdateMapper): StandardPromise<OrderLogisticsProducts> => {
  return request('/mall-mall/api/sys/order/logistics/products', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrderLogisticsProductsBatch = async (params: OrderLogisticsProductsUpdateMapper[]): StandardPromise<OrderLogisticsProducts[]> => {
  return request('/mall-mall/api/sys/order/logistics/products/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrderLogisticsProducts = async (params: OrderLogisticsProductsUpdateMapper): StandardPromise<OrderLogisticsProducts> => {
  return request('/mall-mall/api/sys/order/logistics/products', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrderLogisticsProductsBatch = async (params: OrderLogisticsProductsUpdateMapper[]): StandardPromise<OrderLogisticsProducts[]> => {
  return request('/mall-mall/api/sys/order/logistics/products/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrderLogisticsProducts = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/order/logistics/products', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrderLogisticsProductsBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/order/logistics/products/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
