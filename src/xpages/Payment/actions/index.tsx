import { onInitializeWeChatPayOrder } from './theOutermostContainerOfPaymentPage/onInitializeWeChatPayOrder';
import { eventsBackButton } from './backButton';
import type { EventsBackButton } from './backButton';
import { onInitializeOrderCardBasedOnOrderNumber } from './initializeOrderCard/onInitializeOrderCardBasedOnOrderNumber';
import { eventsWeChatPayButton } from './weChatPayButton';
import type { EventsWeChatPayButton } from './weChatPayButton';
import { eventsAlipayPaymentButton } from './alipayPaymentButton';
import type { EventsAlipayPaymentButton } from './alipayPaymentButton';
import { eventsCancelPaymentButton } from './cancelPaymentButton';
import type { EventsCancelPaymentButton } from './cancelPaymentButton';
import { eventsPaymentButtonCompleted } from './paymentButtonCompleted';
import type { EventsPaymentButtonCompleted } from './paymentButtonCompleted';

export type Actions = {
  eventsBackButton: EventsBackButton;
  eventsWeChatPayButton: EventsWeChatPayButton;
  eventsAlipayPaymentButton: EventsAlipayPaymentButton;
  eventsCancelPaymentButton: EventsCancelPaymentButton;
  eventsPaymentButtonCompleted: EventsPaymentButtonCompleted;
};

export {
  onInitializeWeChatPayOrder,
  eventsBackButton,
  onInitializeOrderCardBasedOnOrderNumber,
  eventsWeChatPayButton,
  eventsAlipayPaymentButton,
  eventsCancelPaymentButton,
  eventsPaymentButtonCompleted,
};
