import type { ComponentState } from './types';

export const refreshVisualizationChartComponentState = (state: ComponentState) => ({
  type: 'VisualizationChart/refreshComponentState',
  payload: { ...state },
});
