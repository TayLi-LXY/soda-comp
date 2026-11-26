import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const DialogueModel = createSlice({
  name: 'Dialogue',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
    refreshComponentDialogueDataSchemaListState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.dialogueDataSchemaList = payload.dialogueDataSchemaList;
      return refreshState;
    },
    refreshComponentPreviewUrlOfSelectedSchemaState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.previewUrlOfSelectedSchema = payload.previewUrlOfSelectedSchema;
      return refreshState;
    },
    refreshComponentInputGlobalDataState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.inputGlobalData = payload.inputGlobalData;
      return refreshState;
    },
    refreshComponentMessageListState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.messageList = payload.messageList;
      return refreshState;
    },
    refreshComponentLatestNewsRecordEntityState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.latestNewsRecordEntity = payload.latestNewsRecordEntity;
      return refreshState;
    },
    refreshComponentSenderIdListState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.senderIdList = payload.senderIdList;
      return refreshState;
    },
    refreshComponentSenderNicknameDictionaryState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.senderNicknameDictionary = payload.senderNicknameDictionary;
      return refreshState;
    },
    refreshComponentDialogueTaskCompletedState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.dialogueTaskCompleted = payload.dialogueTaskCompleted;
      return refreshState;
    },
    refreshComponentUserConversationIdState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...refreshState.component };
      refreshState.component.userConversationId = payload.userConversationId;
      return refreshState;
    },
  },
});

export default DialogueModel;
