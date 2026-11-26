import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrderLogisticsFlow } from '@/types/com.horsecoder.platform.mall/sys/OrderLogisticsFlow';

export interface OrderLogisticsFlowFilterMapper {
  id?: string;
  orderLogisticsId?: string;
  orderLogisticsIdIn?: string[];
  flowInformation?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrderLogisticsFlowPostMapper {
  orderLogisticsId: string;
  flowInformation: string;
}

export interface OrderLogisticsFlowUpdateMapper {
  id: string;
  orderLogisticsId?: string;
  flowInformation?: string;
}

export const getOrderLogisticsFlowSimple = async (id: string): StandardPromise<OrderLogisticsFlow> => {
  return request('/mall-mall/api/sys/order/logistics/flow/single/simple', {
    params: { id },
  });
};

export const getOrderLogisticsFlow = async (id: string): StandardPromise<OrderLogisticsFlow> => {
  return request('/mall-mall/api/sys/order/logistics/flow/single', {
    params: { id },
  });
};

export const getOrderLogisticsFlowList = async (params: OrderLogisticsFlowFilterMapper): StandardPromise<OrderLogisticsFlow[]> => {
  return request('/mall-mall/api/sys/order/logistics/flow/filter', { params });
};

export const getOrderLogisticsFlowDetailList = async (params: OrderLogisticsFlowFilterMapper): StandardPromise<OrderLogisticsFlow[]> => {
  return request('/mall-mall/api/sys/order/logistics/flow/filter/detail', { params });
};

export const postOrderLogisticsFlow = async (params: OrderLogisticsFlowPostMapper): StandardPromise<OrderLogisticsFlow> => {
  return request('/mall-mall/api/sys/order/logistics/flow', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrderLogisticsFlowBatch = async (params: OrderLogisticsFlowPostMapper[]): StandardPromise<OrderLogisticsFlow[]> => {
  return request('/mall-mall/api/sys/order/logistics/flow/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrderLogisticsFlow = async (params: OrderLogisticsFlowUpdateMapper): StandardPromise<OrderLogisticsFlow> => {
  return request('/mall-mall/api/sys/order/logistics/flow', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrderLogisticsFlowBatch = async (params: OrderLogisticsFlowUpdateMapper[]): StandardPromise<OrderLogisticsFlow[]> => {
  return request('/mall-mall/api/sys/order/logistics/flow/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrderLogisticsFlow = async (params: OrderLogisticsFlowUpdateMapper): StandardPromise<OrderLogisticsFlow> => {
  return request('/mall-mall/api/sys/order/logistics/flow', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrderLogisticsFlowBatch = async (params: OrderLogisticsFlowUpdateMapper[]): StandardPromise<OrderLogisticsFlow[]> => {
  return request('/mall-mall/api/sys/order/logistics/flow/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrderLogisticsFlow = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/order/logistics/flow', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrderLogisticsFlowBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/order/logistics/flow/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
