import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { UserAddress } from '@/types/com.horsecoder.platform.mall/sys/UserAddress';

export interface UserAddressFilterMapper {
  id?: string;
  userId?: string;
  receiver?: string;
  location?: string;
  locationLike?: string;
  detailedAddress?: string;
  detailedAddressLike?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface UserAddressPostMapper {
  userId: string;
  receiver: string;
  location: string;
  detailedAddress: string;
}

export interface UserAddressUpdateMapper {
  id: string;
  userId?: string;
  receiver?: string;
  location?: string;
  detailedAddress?: string;
}

export const getUserAddressSimple = async (id: string): StandardPromise<UserAddress> => {
  return request('/mall-mall/api/sys/user/address/single/simple', {
    params: { id },
  });
};

export const getUserAddress = async (id: string): StandardPromise<UserAddress> => {
  return request('/mall-mall/api/sys/user/address/single', {
    params: { id },
  });
};

export const getUserAddressList = async (params: UserAddressFilterMapper): StandardPromise<UserAddress[]> => {
  return request('/mall-mall/api/sys/user/address/filter', { params });
};

export const getUserAddressDetailList = async (params: UserAddressFilterMapper): StandardPromise<UserAddress[]> => {
  return request('/mall-mall/api/sys/user/address/filter/detail', { params });
};

export const postUserAddress = async (params: UserAddressPostMapper): StandardPromise<UserAddress> => {
  return request('/mall-mall/api/sys/user/address', {
    method: 'POST',
    data: { ...params },
  });
};

export const postUserAddressBatch = async (params: UserAddressPostMapper[]): StandardPromise<UserAddress[]> => {
  return request('/mall-mall/api/sys/user/address/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateUserAddress = async (params: UserAddressUpdateMapper): StandardPromise<UserAddress> => {
  return request('/mall-mall/api/sys/user/address', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateUserAddressBatch = async (params: UserAddressUpdateMapper[]): StandardPromise<UserAddress[]> => {
  return request('/mall-mall/api/sys/user/address/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putUserAddress = async (params: UserAddressUpdateMapper): StandardPromise<UserAddress> => {
  return request('/mall-mall/api/sys/user/address', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putUserAddressBatch = async (params: UserAddressUpdateMapper[]): StandardPromise<UserAddress[]> => {
  return request('/mall-mall/api/sys/user/address/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteUserAddress = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/user/address', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteUserAddressBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/user/address/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
