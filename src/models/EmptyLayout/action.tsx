import type { LayoutState } from './types';
import type { User } from '@/types/com.horsecoder.identity/sys/User';

export const refreshEmptyLayoutLayoutState = (state: LayoutState) => ({
  type: 'EmptyLayout/refreshLayoutState',
  payload: { ...state },
});

export const refreshEmptyLayoutLayoutLoggedinUserState = (loggedinUser: User | undefined) => ({
  type: 'EmptyLayout/refreshLayoutLoggedinUserState',
  payload: { loggedinUser },
});

export const refreshEmptyLayoutLayoutMemberTypeState = (memberType: string | undefined) => ({
  type: 'EmptyLayout/refreshLayoutMemberTypeState',
  payload: { memberType },
});
