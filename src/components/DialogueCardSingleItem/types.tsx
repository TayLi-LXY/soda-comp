import type { Actions } from './actions';
import type { DialogueCard } from '@/types/com.horsecoder.platform.mall.umi.chat/dialogueCardSingleItem/DialogueCard';


export type DialogueCardSingleItemWrapperProps =  {
  entity: DialogueCard | undefined;
  index: number;
  selectDialogueCallback: ((index: number) => void) | undefined;
};

export type DialogueCardSingleItemProps = {
  actions: Actions;
  entity: DialogueCard | undefined;
  index: number;
  selectDialogueCallback: ((index: number) => void) | undefined;
  selectChangePackageDataInDialogueCard: string | undefined;
  setSelectChangePackageDataInDialogueCard: (selectChangePackageDataInDialogueCard: string | undefined) => void;
  avatarUrl: string;
  setAvatarUrl: (avatarUrl: string) => void;
  dialogueCardTimeDisplay: string;
  setDialogueCardTimeDisplay: (dialogueCardTimeDisplay: string) => void;
  recentMessageAbbreviation: string | undefined;
  setRecentMessageAbbreviation: (recentMessageAbbreviation: string | undefined) => void;
};

