import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const CreateAGroupChatMemberItemModel = createSlice({
  name: 'CreateAGroupChatMemberItem',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
});

export default CreateAGroupChatMemberItemModel;
