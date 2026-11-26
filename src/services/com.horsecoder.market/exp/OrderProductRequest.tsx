import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrderProduct } from '@/types/com.horsecoder.market/exp/OrderProduct';

export interface OrderProductFilterMapper {
  id?: string;
  orderId?: string;
  productId?: string;
  originalUnitPrice?: number;
  number?: number;
  originalPrice?: number;
  actualPayment?: number;
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

export interface OrderProductPostMapper {
  orderId: string;
  productId?: string;
  originalUnitPrice: number;
  number: number;
  originalPrice: number;
  actualPayment: number;
  status?: number;
}

export interface OrderProductUpdateMapper {
  id: string;
  orderId?: string;
  productId?: string;
  originalUnitPrice?: number;
  number?: number;
  originalPrice?: number;
  actualPayment?: number;
  status?: number;
}

export const getOrderProductSimple = async (id: string): StandardPromise<OrderProduct> => {
  return request('/horsecoder-market/api/exp/order/product/single/simple', {
    params: { id },
  });
};

export const getOrderProduct = async (id: string): StandardPromise<OrderProduct> => {
  return request('/horsecoder-market/api/exp/order/product/single', {
    params: { id },
  });
};

export const getOrderProductList = async (params: OrderProductFilterMapper): StandardPromise<OrderProduct[]> => {
  return request('/horsecoder-market/api/exp/order/product/filter', { params });
};

export const getOrderProductDetailList = async (params: OrderProductFilterMapper): StandardPromise<OrderProduct[]> => {
  return request('/horsecoder-market/api/exp/order/product/filter/detail', { params });
};

export const postOrderProduct = async (params: OrderProductPostMapper): StandardPromise<OrderProduct> => {
  return request('/horsecoder-market/api/exp/order/product', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrderProductBatch = async (params: OrderProductPostMapper[]): StandardPromise<OrderProduct[]> => {
  return request('/horsecoder-market/api/exp/order/product/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrderProduct = async (params: OrderProductUpdateMapper): StandardPromise<OrderProduct> => {
  return request('/horsecoder-market/api/exp/order/product', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrderProductBatch = async (params: OrderProductUpdateMapper[]): StandardPromise<OrderProduct[]> => {
  return request('/horsecoder-market/api/exp/order/product/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrderProduct = async (params: OrderProductUpdateMapper): StandardPromise<OrderProduct> => {
  return request('/horsecoder-market/api/exp/order/product', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrderProductBatch = async (params: OrderProductUpdateMapper[]): StandardPromise<OrderProduct[]> => {
  return request('/horsecoder-market/api/exp/order/product/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrderProduct = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/order/product', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrderProductBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/order/product/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
