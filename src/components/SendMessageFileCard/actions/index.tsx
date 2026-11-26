import { eventsSendMessageFileCard } from './sendMessageFileCard';
import type { EventsSendMessageFileCard } from './sendMessageFileCard';
import { onInitializeExpandCollapse } from './sendMessageFileCard/onInitializeExpandCollapse';
import { onInitializeFileCard } from './sendMessageFileCard/onInitializeFileCard';

export type Actions = {
  eventsSendMessageFileCard: EventsSendMessageFileCard;
};

export {
  eventsSendMessageFileCard,
  onInitializeExpandCollapse,
  onInitializeFileCard,
};
