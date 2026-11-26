import { onObtainContentOfReplyMessage } from './replyIndividualComponent/onObtainContentOfReplyMessage';
import { eventsReplyBubbleSubContainer } from './replyBubbleSubContainer';
import type { EventsReplyBubbleSubContainer } from './replyBubbleSubContainer';

export type Actions = {
  eventsReplyBubbleSubContainer: EventsReplyBubbleSubContainer;
};

export {
  onObtainContentOfReplyMessage,
  eventsReplyBubbleSubContainer,
};
