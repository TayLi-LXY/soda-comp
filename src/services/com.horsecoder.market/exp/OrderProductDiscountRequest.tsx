import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrderProductDiscount } from '@/types/com.horsecoder.market/exp/OrderProductDiscount';

export interface OrderProductDiscountFilterMapper {
  id?: string;
  orderId?: string;
  orderIdIn?: string[];
  discountId?: string;
  discountIdIn?: string[];
  productId?: string;
  productIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrderProductDiscountPostMapper {
  orderId: string;
  discountId: string;
  productId: string;
}

export interface OrderProductDiscountUpdateMapper {
  id: string;
  orderId?: string;
  discountId?: string;
  productId?: string;
}

export const getOrderProductDiscountSimple = async (id: string): StandardPromise<OrderProductDiscount> => {
  return request('/horsecoder-market/api/exp/order/product/discount/single/simple', {
    params: { id },
  });
};

export const getOrderProductDiscount = async (id: string): StandardPromise<OrderProductDiscount> => {
  return request('/horsecoder-market/api/exp/order/product/discount/single', {
    params: { id },
  });
};

export const getOrderProductDiscountList = async (params: OrderProductDiscountFilterMapper): StandardPromise<OrderProductDiscount[]> => {
  return request('/horsecoder-market/api/exp/order/product/discount/filter', { params });
};

export const getOrderProductDiscountDetailList = async (params: OrderProductDiscountFilterMapper): StandardPromise<OrderProductDiscount[]> => {
  return request('/horsecoder-market/api/exp/order/product/discount/filter/detail', { params });
};

export const postOrderProductDiscount = async (params: OrderProductDiscountPostMapper): StandardPromise<OrderProductDiscount> => {
  return request('/horsecoder-market/api/exp/order/product/discount', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrderProductDiscountBatch = async (params: OrderProductDiscountPostMapper[]): StandardPromise<OrderProductDiscount[]> => {
  return request('/horsecoder-market/api/exp/order/product/discount/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrderProductDiscount = async (params: OrderProductDiscountUpdateMapper): StandardPromise<OrderProductDiscount> => {
  return request('/horsecoder-market/api/exp/order/product/discount', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrderProductDiscountBatch = async (params: OrderProductDiscountUpdateMapper[]): StandardPromise<OrderProductDiscount[]> => {
  return request('/horsecoder-market/api/exp/order/product/discount/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrderProductDiscount = async (params: OrderProductDiscountUpdateMapper): StandardPromise<OrderProductDiscount> => {
  return request('/horsecoder-market/api/exp/order/product/discount', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrderProductDiscountBatch = async (params: OrderProductDiscountUpdateMapper[]): StandardPromise<OrderProductDiscount[]> => {
  return request('/horsecoder-market/api/exp/order/product/discount/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrderProductDiscount = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/order/product/discount', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrderProductDiscountBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/order/product/discount/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
