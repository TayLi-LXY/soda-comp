import type { ComponentState } from './types';

export const refreshSingleItemSchemaFieldComponentState = (state: ComponentState) => ({
  type: 'SingleItemSchemaField/refreshComponentState',
  payload: { ...state },
});
