import type { ComponentState } from './types';

export const refreshLeftolbarBelowInputBoxComponentState = (state: ComponentState) => ({
  type: 'LeftolbarBelowInputBox/refreshComponentState',
  payload: { ...state },
});
