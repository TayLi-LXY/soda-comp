import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelTemplateScene } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/ModelTemplateScene';

export interface ModelTemplateSceneFilterMapper {
  id?: string;
  modelTemplateId?: string;
  modelTemplateIdIn?: string[];
  modelSceneId?: string;
  modelSceneIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface ModelTemplateScenePostMapper {
  modelTemplateId: string;
  modelSceneId: string;
}

export interface ModelTemplateSceneUpdateMapper {
  id: string;
  modelTemplateId?: string;
  modelSceneId?: string;
}

export const getModelTemplateSceneSimple = async (id: string): StandardPromise<ModelTemplateScene> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene/single/simple', {
    params: { id },
  });
};

export const getModelTemplateScene = async (id: string): StandardPromise<ModelTemplateScene> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene/single', {
    params: { id },
  });
};

export const getModelTemplateSceneList = async (params: ModelTemplateSceneFilterMapper): StandardPromise<ModelTemplateScene[]> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene/filter', { params });
};

export const getModelTemplateSceneDetailList = async (params: ModelTemplateSceneFilterMapper): StandardPromise<ModelTemplateScene[]> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene/filter/detail', { params });
};

export const postModelTemplateScene = async (params: ModelTemplateScenePostMapper): StandardPromise<ModelTemplateScene> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene', {
    method: 'POST',
    data: { ...params },
  });
};

export const postModelTemplateSceneBatch = async (params: ModelTemplateScenePostMapper[]): StandardPromise<ModelTemplateScene[]> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateModelTemplateScene = async (params: ModelTemplateSceneUpdateMapper): StandardPromise<ModelTemplateScene> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateModelTemplateSceneBatch = async (params: ModelTemplateSceneUpdateMapper[]): StandardPromise<ModelTemplateScene[]> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putModelTemplateScene = async (params: ModelTemplateSceneUpdateMapper): StandardPromise<ModelTemplateScene> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putModelTemplateSceneBatch = async (params: ModelTemplateSceneUpdateMapper[]): StandardPromise<ModelTemplateScene[]> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteModelTemplateScene = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteModelTemplateSceneBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/model/template/scene/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
