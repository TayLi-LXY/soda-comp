import { onInitializeOrderSelectPage } from './orderSelectContainer/onInitializeOrderSelectPage';
import { eventsFreeClaimButton } from './freeClaimButton';
import type { EventsFreeClaimButton } from './freeClaimButton';
import { eventsRefuelingAndPaymentImmediately } from './refuelingAndPaymentImmediately';
import type { EventsRefuelingAndPaymentImmediately } from './refuelingAndPaymentImmediately';
import { eventsPromptCancelOrderButton } from './promptCancelOrderButton';
import type { EventsPromptCancelOrderButton } from './promptCancelOrderButton';
import { eventsOrderContinuePaymentButton } from './orderContinuePaymentButton';
import type { EventsOrderContinuePaymentButton } from './orderContinuePaymentButton';
import { eventsAllPackageButton } from './allPackageButton';
import type { EventsAllPackageButton } from './allPackageButton';
import { eventsPersonalPackageButton } from './personalPackageButton';
import type { EventsPersonalPackageButton } from './personalPackageButton';
import { eventsEnterprisePackageButton } from './enterprisePackageButton';
import type { EventsEnterprisePackageButton } from './enterprisePackageButton';

export type Actions = {
  eventsFreeClaimButton: EventsFreeClaimButton;
  eventsRefuelingAndPaymentImmediately: EventsRefuelingAndPaymentImmediately;
  eventsPromptCancelOrderButton: EventsPromptCancelOrderButton;
  eventsOrderContinuePaymentButton: EventsOrderContinuePaymentButton;
  eventsAllPackageButton: EventsAllPackageButton;
  eventsPersonalPackageButton: EventsPersonalPackageButton;
  eventsEnterprisePackageButton: EventsEnterprisePackageButton;
};

export {
  onInitializeOrderSelectPage,
  eventsFreeClaimButton,
  eventsRefuelingAndPaymentImmediately,
  eventsPromptCancelOrderButton,
  eventsOrderContinuePaymentButton,
  eventsAllPackageButton,
  eventsPersonalPackageButton,
  eventsEnterprisePackageButton,
};
