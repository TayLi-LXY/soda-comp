import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const PanelModel = createSlice({
  name: 'Panel',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
    refreshComponentActiveSubpanelState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.activeSubpanel = payload.activeSubpanel;
      return refreshState;
    },
  },
});

export default PanelModel;
