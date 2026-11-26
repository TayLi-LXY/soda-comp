import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const MainModel = createSlice({
  name: 'Main',
  initialState: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
    refreshPageVisibleControlSignalDataState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...refreshState.page };
      refreshState.page.visibleControlSignalData = payload.visibleControlSignalData;
      return refreshState;
    },
    refreshPageUpgradePlanVisibleState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...refreshState.page };
      refreshState.page.upgradePlanVisible = payload.upgradePlanVisible;
      return refreshState;
    },
  },
});

export default MainModel;
