import type { User } from '@/types/com.horsecoder.identity/sys/User';

export interface LayoutState {
  loggedinUser: User | undefined,
  memberType: string | undefined,
}


export interface EmptyLayoutModelState {
  layout: LayoutState;
  components: {
  };
}

const defaultLayoutState: LayoutState = {
  loggedinUser: undefined,
  memberType: '',
};


export const defaultState: EmptyLayoutModelState = {
  layout: defaultLayoutState,
  components: {
  },
};
