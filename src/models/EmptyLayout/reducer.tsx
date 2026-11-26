import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const EmptyLayoutModel = createSlice({
  name: 'EmptyLayout',
  initialState: defaultState,
  reducers: {
    refreshLayoutState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.layout = { ...payload };
      return refreshState;
    },
    refreshLayoutLoggedinUserState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.layout = { ...refreshState.layout };
      refreshState.layout.loggedinUser = payload.loggedinUser;
      return refreshState;
    },
    refreshLayoutMemberTypeState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.layout = { ...refreshState.layout };
      refreshState.layout.memberType = payload.memberType;
      return refreshState;
    },
  },
});

export default EmptyLayoutModel;
