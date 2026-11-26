import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const IndexModel = createSlice({
  name: 'Index',
  initialState: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
});

export default IndexModel;
