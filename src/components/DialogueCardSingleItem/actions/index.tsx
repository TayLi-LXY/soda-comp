import { eventsDialogueCardSingleItemDiv } from './dialogueCardSingleItemDiv';
import type { EventsDialogueCardSingleItemDiv } from './dialogueCardSingleItemDiv';
import { onInitializeAvatarImage } from './dialogueCardSingleItemDiv/onInitializeAvatarImage';
import { onInitializePackageSelected } from './dialogueCardSingleItemDiv/onInitializePackageSelected';
import { onInitializeRecentMessageTimePrompt } from './timeInformation/onInitializeRecentMessageTimePrompt';
import { onInitializeLatestMessageAbbreviation } from './recentMessageAbbreviationParagraph/onInitializeLatestMessageAbbreviation';

export type Actions = {
  eventsDialogueCardSingleItemDiv: EventsDialogueCardSingleItemDiv;
};

export {
  eventsDialogueCardSingleItemDiv,
  onInitializeAvatarImage,
  onInitializePackageSelected,
  onInitializeRecentMessageTimePrompt,
  onInitializeLatestMessageAbbreviation,
};
