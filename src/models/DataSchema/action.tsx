import type { ComponentState } from './types';

export const refreshDataSchemaComponentState = (state: ComponentState) => ({
  type: 'DataSchema/refreshComponentState',
  payload: { ...state },
});
