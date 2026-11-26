import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const QAComponentModel = createSlice({
  name: 'QAComponent',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
    refreshComponentTitleState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.title = payload.title;
      return refreshState;
    },
    refreshComponentLoadingState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.loading = payload.loading;
      return refreshState;
    },
  },
});

export default QAComponentModel;
