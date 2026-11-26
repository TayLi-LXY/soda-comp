import type { ComponentState } from './types';

export const refreshTableVisualizationComponentState = (state: ComponentState) => ({
  type: 'TableVisualization/refreshComponentState',
  payload: { ...state },
});
