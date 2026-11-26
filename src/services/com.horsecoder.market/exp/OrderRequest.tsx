import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Order } from '@/types/com.horsecoder.market/exp/Order';

export interface OrderFilterMapper {
  id?: string;
  accountId?: string;
  orderNo?: string;
  orderType?: string;
  originPrice?: number;
  finalPrice?: number;
  payNo?: string;
  gmtPayFrom?: number;
  gmtPayTo?: number;
  orderState?: number;
  orderStateIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrderPostMapper {
  accountId: string;
  orderNo: string;
  orderType?: string;
  originPrice: number;
  finalPrice: number;
  payNo?: string;
  gmtPay?: number;
  orderState?: number;
}

export interface OrderUpdateMapper {
  id: string;
  accountId?: string;
  orderNo?: string;
  orderType?: string;
  originPrice?: number;
  finalPrice?: number;
  payNo?: string;
  gmtPay?: number;
  orderState?: number;
}

export const getOrderSimple = async (id: string): StandardPromise<Order> => {
  return request('/horsecoder-market/api/exp/order/single/simple', {
    params: { id },
  });
};

export const getOrder = async (id: string): StandardPromise<Order> => {
  return request('/horsecoder-market/api/exp/order/single', {
    params: { id },
  });
};

export const getOrderList = async (params: OrderFilterMapper): StandardPromise<Order[]> => {
  return request('/horsecoder-market/api/exp/order/filter', { params });
};

export const getOrderDetailList = async (params: OrderFilterMapper): StandardPromise<Order[]> => {
  return request('/horsecoder-market/api/exp/order/filter/detail', { params });
};

export const postOrder = async (params: OrderPostMapper): StandardPromise<Order> => {
  return request('/horsecoder-market/api/exp/order', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrderBatch = async (params: OrderPostMapper[]): StandardPromise<Order[]> => {
  return request('/horsecoder-market/api/exp/order/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrder = async (params: OrderUpdateMapper): StandardPromise<Order> => {
  return request('/horsecoder-market/api/exp/order', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrderBatch = async (params: OrderUpdateMapper[]): StandardPromise<Order[]> => {
  return request('/horsecoder-market/api/exp/order/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrder = async (params: OrderUpdateMapper): StandardPromise<Order> => {
  return request('/horsecoder-market/api/exp/order', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrderBatch = async (params: OrderUpdateMapper[]): StandardPromise<Order[]> => {
  return request('/horsecoder-market/api/exp/order/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrder = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/order', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrderBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/order/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
