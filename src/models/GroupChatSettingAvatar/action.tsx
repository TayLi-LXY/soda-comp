import type { ComponentState } from './types';

export const refreshGroupChatSettingAvatarComponentState = (state: ComponentState) => ({
  type: 'GroupChatSettingAvatar/refreshComponentState',
  payload: { ...state },
});
