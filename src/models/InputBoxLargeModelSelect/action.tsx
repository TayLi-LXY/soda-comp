import type { ComponentState } from './types';

export const refreshInputBoxLargeModelSelectComponentState = (state: ComponentState) => ({
  type: 'InputBoxLargeModelSelect/refreshComponentState',
  payload: { ...state },
});
