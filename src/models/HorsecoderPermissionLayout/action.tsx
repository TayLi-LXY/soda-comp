import type { LayoutState } from './types';

export const refreshHorsecoderPermissionLayoutLayoutState = (state: LayoutState) => ({
  type: 'HorsecoderPermissionLayout/refreshLayoutState',
  payload: { ...state },
});

export const refreshHorsecoderPermissionLayoutLayoutOrganizeAccountPermissionListState = (organizeAccountPermissionList: string[]) => ({
  type: 'HorsecoderPermissionLayout/refreshLayoutOrganizeAccountPermissionListState',
  payload: { organizeAccountPermissionList },
});
