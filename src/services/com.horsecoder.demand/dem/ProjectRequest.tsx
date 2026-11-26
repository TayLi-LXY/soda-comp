import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Project } from '@/types/com.horsecoder.demand/dem/Project';

export interface ProjectFilterMapper {
  id?: string;
  spaceId?: string;
  userId?: string;
  projectName?: string;
  projectNameLike?: string;
  description?: string;
  modelId?: string;
  modelIdIn?: string[];
  organizeId?: string;
  organizeIdIn?: string[];
  creatorId?: string;
  creatorIdIn?: string[];
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface ProjectPostMapper {
  spaceId: string;
  userId: string;
  projectName: string;
  description?: string;
  modelId?: string;
  organizeId: string;
  creatorId: string;
}

export interface ProjectUpdateMapper {
  id: string;
  spaceId?: string;
  userId?: string;
  projectName?: string;
  description?: string;
  modelId?: string;
  organizeId?: string;
  creatorId?: string;
}

export const getProjectSimple = async (id: string): StandardPromise<Project> => {
  return request('/horsecoder-demand/api/dem/project/single/simple', {
    params: { id },
  });
};

export const getProject = async (id: string): StandardPromise<Project> => {
  return request('/horsecoder-demand/api/dem/project/single', {
    params: { id },
  });
};

export const getProjectList = async (params: ProjectFilterMapper): StandardPromise<Project[]> => {
  return request('/horsecoder-demand/api/dem/project/filter', { params });
};

export const getProjectDetailList = async (params: ProjectFilterMapper): StandardPromise<Project[]> => {
  return request('/horsecoder-demand/api/dem/project/filter/detail', { params });
};

export const postProject = async (params: ProjectPostMapper): StandardPromise<Project> => {
  return request('/horsecoder-demand/api/dem/project', {
    method: 'POST',
    data: { ...params },
  });
};

export const postProjectBatch = async (params: ProjectPostMapper[]): StandardPromise<Project[]> => {
  return request('/horsecoder-demand/api/dem/project/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateProject = async (params: ProjectUpdateMapper): StandardPromise<Project> => {
  return request('/horsecoder-demand/api/dem/project', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateProjectBatch = async (params: ProjectUpdateMapper[]): StandardPromise<Project[]> => {
  return request('/horsecoder-demand/api/dem/project/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putProject = async (params: ProjectUpdateMapper): StandardPromise<Project> => {
  return request('/horsecoder-demand/api/dem/project', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putProjectBatch = async (params: ProjectUpdateMapper[]): StandardPromise<Project[]> => {
  return request('/horsecoder-demand/api/dem/project/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteProject = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-demand/api/dem/project', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteProjectBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-demand/api/dem/project/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
