import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Category } from '@/types/com.horsecoder.market/exp/Category';

export interface CategoryFilterMapper {
  id?: string;
  categoryName?: string;
  categoryNameLike?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface CategoryPostMapper {
  categoryName: string;
}

export interface CategoryUpdateMapper {
  id: string;
  categoryName?: string;
}

export const getCategorySimple = async (id: string): StandardPromise<Category> => {
  return request('/horsecoder-market/api/exp/category/single/simple', {
    params: { id },
  });
};

export const getCategory = async (id: string): StandardPromise<Category> => {
  return request('/horsecoder-market/api/exp/category/single', {
    params: { id },
  });
};

export const getCategoryList = async (params: CategoryFilterMapper): StandardPromise<Category[]> => {
  return request('/horsecoder-market/api/exp/category/filter', { params });
};

export const getCategoryDetailList = async (params: CategoryFilterMapper): StandardPromise<Category[]> => {
  return request('/horsecoder-market/api/exp/category/filter/detail', { params });
};

export const postCategory = async (params: CategoryPostMapper): StandardPromise<Category> => {
  return request('/horsecoder-market/api/exp/category', {
    method: 'POST',
    data: { ...params },
  });
};

export const postCategoryBatch = async (params: CategoryPostMapper[]): StandardPromise<Category[]> => {
  return request('/horsecoder-market/api/exp/category/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateCategory = async (params: CategoryUpdateMapper): StandardPromise<Category> => {
  return request('/horsecoder-market/api/exp/category', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateCategoryBatch = async (params: CategoryUpdateMapper[]): StandardPromise<Category[]> => {
  return request('/horsecoder-market/api/exp/category/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putCategory = async (params: CategoryUpdateMapper): StandardPromise<Category> => {
  return request('/horsecoder-market/api/exp/category', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putCategoryBatch = async (params: CategoryUpdateMapper[]): StandardPromise<Category[]> => {
  return request('/horsecoder-market/api/exp/category/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteCategory = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/category', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteCategoryBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-market/api/exp/category/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
