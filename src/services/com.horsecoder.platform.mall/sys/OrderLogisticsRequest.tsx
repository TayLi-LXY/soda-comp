import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrderLogistics } from '@/types/com.horsecoder.platform.mall/sys/OrderLogistics';

export interface OrderLogisticsFilterMapper {
  id?: string;
  orderId?: string;
  orderIdIn?: string[];
  status?: number;
  statusIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrderLogisticsPostMapper {
  orderId: string;
  status?: number;
}

export interface OrderLogisticsUpdateMapper {
  id: string;
  orderId?: string;
  status?: number;
}

export const getOrderLogisticsSimple = async (id: string): StandardPromise<OrderLogistics> => {
  return request('/mall-mall/api/sys/order/logistics/single/simple', {
    params: { id },
  });
};

export const getOrderLogistics = async (id: string): StandardPromise<OrderLogistics> => {
  return request('/mall-mall/api/sys/order/logistics/single', {
    params: { id },
  });
};

export const getOrderLogisticsList = async (params: OrderLogisticsFilterMapper): StandardPromise<OrderLogistics[]> => {
  return request('/mall-mall/api/sys/order/logistics/filter', { params });
};

export const getOrderLogisticsDetailList = async (params: OrderLogisticsFilterMapper): StandardPromise<OrderLogistics[]> => {
  return request('/mall-mall/api/sys/order/logistics/filter/detail', { params });
};

export const postOrderLogistics = async (params: OrderLogisticsPostMapper): StandardPromise<OrderLogistics> => {
  return request('/mall-mall/api/sys/order/logistics', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrderLogisticsBatch = async (params: OrderLogisticsPostMapper[]): StandardPromise<OrderLogistics[]> => {
  return request('/mall-mall/api/sys/order/logistics/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrderLogistics = async (params: OrderLogisticsUpdateMapper): StandardPromise<OrderLogistics> => {
  return request('/mall-mall/api/sys/order/logistics', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrderLogisticsBatch = async (params: OrderLogisticsUpdateMapper[]): StandardPromise<OrderLogistics[]> => {
  return request('/mall-mall/api/sys/order/logistics/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrderLogistics = async (params: OrderLogisticsUpdateMapper): StandardPromise<OrderLogistics> => {
  return request('/mall-mall/api/sys/order/logistics', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrderLogisticsBatch = async (params: OrderLogisticsUpdateMapper[]): StandardPromise<OrderLogistics[]> => {
  return request('/mall-mall/api/sys/order/logistics/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrderLogistics = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/order/logistics', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrderLogisticsBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/order/logistics/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
