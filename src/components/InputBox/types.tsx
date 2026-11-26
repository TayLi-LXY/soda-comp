import type { Actions } from './actions';
import type { User } from '@/types/com.horsecoder.identity/sys/User';


export type InputBoxWrapperProps =  {
  conversationId: string;
  userConversationId: string | undefined;
  loggedinUser: User | undefined;
};

export type InputBoxProps = {
  actions: Actions;
  visibleControlSignalData: string | undefined;
  inputContent: string;
  setInputContent: (inputContent: string) => void;
  selectedllm: string | undefined;
  setSelectedllm: (selectedllm: string | undefined) => void;
  conversationId: string;
  userConversationId: string | undefined;
  loggedinUser: User | undefined;
  userUploadedFileList: any[];
  setUserUploadedFileList: (userUploadedFileList: any[]) => void;
};

