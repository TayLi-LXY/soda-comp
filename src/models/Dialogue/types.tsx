import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';
import type { DialogueDetails } from '@/types/com.horsecoder.common.edu.wiseWHU.dialogue/sys/DialogueDetails';

export interface ComponentState {
  dialogueDataSchemaList: SchemaEntity[],
  previewUrlOfSelectedSchema: string | undefined,
  inputGlobalData: string | undefined,
  messageList: DialogueDetails | undefined,
  latestNewsRecordEntity: list,
  senderIdList: list,
  senderNicknameDictionary: map,
  dialogueTaskCompleted: number | undefined,
  userConversationId: string | undefined,
}


export interface DialogueModelState {
  component: ComponentState;
  components: {
  };
}

const defaultComponentState: ComponentState = {
  dialogueDataSchemaList: [],
  previewUrlOfSelectedSchema: undefined,
  inputGlobalData: undefined,
  messageList: undefined,
  latestNewsRecordEntity: [],
  senderIdList: [],
  senderNicknameDictionary: {},
  dialogueTaskCompleted: undefined,
  userConversationId: undefined,
};


export const defaultState: DialogueModelState = {
  component: defaultComponentState,
  components: {
  },
};
