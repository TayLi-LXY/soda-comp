import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const HorsecoderPermissionLayoutModel = createSlice({
  name: 'HorsecoderPermissionLayout',
  initialState: defaultState,
  reducers: {
    refreshLayoutState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.layout = { ...payload };
      return refreshState;
    },
    refreshLayoutOrganizeAccountPermissionListState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.layout = { ...refreshState.layout };
      refreshState.layout.organizeAccountPermissionList = payload.organizeAccountPermissionList;
      return refreshState;
    },
  },
});

export default HorsecoderPermissionLayoutModel;
