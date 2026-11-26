import type { Actions } from './actions';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';
import type { DialogueFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueFile';
import type { DialogueDetails } from '@/types/com.horsecoder.common.edu.wiseWHU.dialogue/sys/DialogueDetails';


export type DialogueWrapperProps =  {
};

export type DialogueProps = {
  actions: Actions;
  loggedinUser: User | undefined;
  conversationId: string;
  dialogueDataSchemaList: SchemaEntity[];
  previewUrlOfSelectedSchema: string | undefined;
  dialogueFileList: DialogueFile[];
  setDialogueFileList: (dialogueFileList: DialogueFile[]) => void;
  inputGlobalData: string | undefined;
  dialogWidth: number;
  setDialogWidth: (dialogWidth: number) => void;
  chatTitleContent: string;
  setChatTitleContent: (chatTitleContent: string) => void;
  dialogueModeSwitchingVisibleControl: boolean;
  setDialogueModeSwitchingVisibleControl: (dialogueModeSwitchingVisibleControl: boolean) => void;
  messageList: DialogueDetails | undefined;
  latestNewsRecordEntity: list;
  senderIdList: list;
  senderNicknameDictionary: map;
  dialogueTaskCompleted: number | undefined;
  userConversationId: string | undefined;
  senderNicknameDictionaryRef: any;
  chatRecordListControl: any[];
  setChatRecordListControl: (chatRecordListControl: any[]) => void;
  leftSideDialogVisibleControl: boolean;
  setLeftSideDialogVisibleControl: (leftSideDialogVisibleControl: boolean) => void;
  inputBoxValue: string | undefined;
  setInputBoxValue: (inputBoxValue: string | undefined) => void;
  placeholder: string | undefined;
  setPlaceholder: (placeholder: string | undefined) => void;
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
  readOnly: boolean;
  setReadOnly: (readOnly: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  autoSize: any;
  setAutoSize: (autoSize: any) => void;
  maxCount: number;
  setMaxCount: (maxCount: number) => void;
  maxSize: number | undefined;
  setMaxSize: (maxSize: number | undefined) => void;
  groupChatSettingsDrawerVisible: boolean;
  setGroupChatSettingsDrawerVisible: (groupChatSettingsDrawerVisible: boolean) => void;
};

