import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const LeftComponentModel = createSlice({
  name: 'LeftComponent',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
    refreshComponentDialogueListRefreshSignalState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.dialogueListRefreshSignal = payload.dialogueListRefreshSignal;
      return refreshState;
    },
    refreshComponentSetPanelVisibleControlsState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.setPanelVisibleControls = payload.setPanelVisibleControls;
      return refreshState;
    },
  },
});

export default LeftComponentModel;
