import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelTemplate } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/ModelTemplate';

export interface ModelTemplateFilterMapper {
  id?: string;
  name?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface ModelTemplatePostMapper {
  name: string;
}

export interface ModelTemplateUpdateMapper {
  id: string;
  name?: string;
}

export const getModelTemplateSimple = async (id: string): StandardPromise<ModelTemplate> => {
  return request('/mall-aiMarketing/api/sys/model/template/single/simple', {
    params: { id },
  });
};

export const getModelTemplate = async (id: string): StandardPromise<ModelTemplate> => {
  return request('/mall-aiMarketing/api/sys/model/template/single', {
    params: { id },
  });
};

export const getModelTemplateList = async (params: ModelTemplateFilterMapper): StandardPromise<ModelTemplate[]> => {
  return request('/mall-aiMarketing/api/sys/model/template/filter', { params });
};

export const getModelTemplateDetailList = async (params: ModelTemplateFilterMapper): StandardPromise<ModelTemplate[]> => {
  return request('/mall-aiMarketing/api/sys/model/template/filter/detail', { params });
};

export const postModelTemplate = async (params: ModelTemplatePostMapper): StandardPromise<ModelTemplate> => {
  return request('/mall-aiMarketing/api/sys/model/template', {
    method: 'POST',
    data: { ...params },
  });
};

export const postModelTemplateBatch = async (params: ModelTemplatePostMapper[]): StandardPromise<ModelTemplate[]> => {
  return request('/mall-aiMarketing/api/sys/model/template/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateModelTemplate = async (params: ModelTemplateUpdateMapper): StandardPromise<ModelTemplate> => {
  return request('/mall-aiMarketing/api/sys/model/template', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateModelTemplateBatch = async (params: ModelTemplateUpdateMapper[]): StandardPromise<ModelTemplate[]> => {
  return request('/mall-aiMarketing/api/sys/model/template/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putModelTemplate = async (params: ModelTemplateUpdateMapper): StandardPromise<ModelTemplate> => {
  return request('/mall-aiMarketing/api/sys/model/template', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putModelTemplateBatch = async (params: ModelTemplateUpdateMapper[]): StandardPromise<ModelTemplate[]> => {
  return request('/mall-aiMarketing/api/sys/model/template/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteModelTemplate = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/model/template', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteModelTemplateBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/model/template/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
