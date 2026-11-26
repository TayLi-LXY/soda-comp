import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const InputBoxLargeModelSelectModel = createSlice({
  name: 'InputBoxLargeModelSelect',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
});

export default InputBoxLargeModelSelectModel;
