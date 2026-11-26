import type { ComponentState } from './types';

export const refreshInputBoxComponentState = (state: ComponentState) => ({
  type: 'InputBox/refreshComponentState',
  payload: { ...state },
});
