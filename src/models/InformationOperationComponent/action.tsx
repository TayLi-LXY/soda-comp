import type { ComponentState } from './types';

export const refreshInformationOperationComponentComponentState = (state: ComponentState) => ({
  type: 'InformationOperationComponent/refreshComponentState',
  payload: { ...state },
});
