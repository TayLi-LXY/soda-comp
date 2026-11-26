import type { ComponentState } from './types';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';
import type { DialogueDetails } from '@/types/com.horsecoder.common.edu.wiseWHU.dialogue/sys/DialogueDetails';

export const refreshDialogueComponentState = (state: ComponentState) => ({
  type: 'Dialogue/refreshComponentState',
  payload: { ...state },
});

export const refreshDialogueComponentDialogueDataSchemaListState = (dialogueDataSchemaList: SchemaEntity[]) => ({
  type: 'Dialogue/refreshComponentDialogueDataSchemaListState',
  payload: { dialogueDataSchemaList },
});

export const refreshDialogueComponentPreviewUrlOfSelectedSchemaState = (previewUrlOfSelectedSchema: string | undefined) => ({
  type: 'Dialogue/refreshComponentPreviewUrlOfSelectedSchemaState',
  payload: { previewUrlOfSelectedSchema },
});

export const refreshDialogueComponentInputGlobalDataState = (inputGlobalData: string | undefined) => ({
  type: 'Dialogue/refreshComponentInputGlobalDataState',
  payload: { inputGlobalData },
});

export const refreshDialogueComponentMessageListState = (messageList: DialogueDetails | undefined) => ({
  type: 'Dialogue/refreshComponentMessageListState',
  payload: { messageList },
});

export const refreshDialogueComponentLatestNewsRecordEntityState = (latestNewsRecordEntity: list) => ({
  type: 'Dialogue/refreshComponentLatestNewsRecordEntityState',
  payload: { latestNewsRecordEntity },
});

export const refreshDialogueComponentSenderIdListState = (senderIdList: list) => ({
  type: 'Dialogue/refreshComponentSenderIdListState',
  payload: { senderIdList },
});

export const refreshDialogueComponentSenderNicknameDictionaryState = (senderNicknameDictionary: map) => ({
  type: 'Dialogue/refreshComponentSenderNicknameDictionaryState',
  payload: { senderNicknameDictionary },
});

export const refreshDialogueComponentDialogueTaskCompletedState = (dialogueTaskCompleted: number | undefined) => ({
  type: 'Dialogue/refreshComponentDialogueTaskCompletedState',
  payload: { dialogueTaskCompleted },
});

export const refreshDialogueComponentUserConversationIdState = (userConversationId: string | undefined) => ({
  type: 'Dialogue/refreshComponentUserConversationIdState',
  payload: { userConversationId },
});
