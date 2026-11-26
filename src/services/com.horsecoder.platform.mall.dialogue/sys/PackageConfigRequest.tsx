import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PackageConfig } from '@/types/com.horsecoder.platform.mall.dialogue/sys/PackageConfig';

export interface PackageConfigFilterMapper {
  id?: string;
  productCode?: string;
  comboName?: string;
  description?: string;
  benefits?: string;
  originalPriceFrom?: number;
  originalPriceTo?: number;
  promotionalPriceFrom?: number;
  promotionalPriceTo?: number;
  memberType?: number;
  status?: number;
  weight?: number;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface PackageConfigPostMapper {
  productCode?: string;
  comboName?: string;
  description?: string;
  benefits?: string;
  originalPrice?: number;
  promotionalPrice?: number;
  memberType?: number;
  status?: number;
  weight?: number;
}

export interface PackageConfigUpdateMapper {
  id: string;
  productCode?: string;
  comboName?: string;
  description?: string;
  benefits?: string;
  originalPrice?: number;
  promotionalPrice?: number;
  memberType?: number;
  status?: number;
  weight?: number;
}

export const getPackageConfigSimple = async (id: string): StandardPromise<PackageConfig> => {
  return request('/mall-dialogue/api/sys/package/config/single/simple', {
    params: { id },
  });
};

export const getPackageConfig = async (id: string): StandardPromise<PackageConfig> => {
  return request('/mall-dialogue/api/sys/package/config/single', {
    params: { id },
  });
};

export const getPackageConfigList = async (params: PackageConfigFilterMapper): StandardPromise<PackageConfig[]> => {
  return request('/mall-dialogue/api/sys/package/config/filter', { params });
};

export const getPackageConfigDetailList = async (params: PackageConfigFilterMapper): StandardPromise<PackageConfig[]> => {
  return request('/mall-dialogue/api/sys/package/config/filter/detail', { params });
};

export const postPackageConfig = async (params: PackageConfigPostMapper): StandardPromise<PackageConfig> => {
  return request('/mall-dialogue/api/sys/package/config', {
    method: 'POST',
    data: { ...params },
  });
};

export const postPackageConfigBatch = async (params: PackageConfigPostMapper[]): StandardPromise<PackageConfig[]> => {
  return request('/mall-dialogue/api/sys/package/config/batch', {
    method: 'POST',
    data: params,
  });
};

export const updatePackageConfig = async (params: PackageConfigUpdateMapper): StandardPromise<PackageConfig> => {
  return request('/mall-dialogue/api/sys/package/config', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updatePackageConfigBatch = async (params: PackageConfigUpdateMapper[]): StandardPromise<PackageConfig[]> => {
  return request('/mall-dialogue/api/sys/package/config/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putPackageConfig = async (params: PackageConfigUpdateMapper): StandardPromise<PackageConfig> => {
  return request('/mall-dialogue/api/sys/package/config', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putPackageConfigBatch = async (params: PackageConfigUpdateMapper[]): StandardPromise<PackageConfig[]> => {
  return request('/mall-dialogue/api/sys/package/config/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deletePackageConfig = async (id: string): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/package/config', {
    method: 'DELETE',
    params: { id },
  });
};

export const deletePackageConfigBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/package/config/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
