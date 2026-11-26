import { onAutomaticallyCreateASessionUponFirstLogin } from './leftComponent/onAutomaticallyCreateASessionUponFirstLogin';
import { eventsLeftComponentDiv0Div0Div1 } from './leftComponentDiv0Div0Div1';
import type { EventsLeftComponentDiv0Div0Div1 } from './leftComponentDiv0Div0Div1';
import { onDetermineWhetherItAnAddConversation } from './leftComponentDiv1/onDetermineWhetherItAnAddConversation';
import { eventsAddNewConversation } from './addNewConversation';
import type { EventsAddNewConversation } from './addNewConversation';
import { eventsCollapseSidebarButton } from './collapseSidebarButton';
import type { EventsCollapseSidebarButton } from './collapseSidebarButton';
import { eventsLeftComponentDiv1Div1Div1Div1Div0 } from './leftComponentDiv1Div1Div1Div1Div0';
import type { EventsLeftComponentDiv1Div1Div1Div1Div0 } from './leftComponentDiv1Div1Div1Div1Div0';
import { onInitializeUserDialogueCardList } from './leftComponentDiv1Div1Div1Div1Div0/onInitializeUserDialogueCardList';
import { onInitializeSettingsPanelBubbleCard } from './setPanelBubbleCard/onInitializeSettingsPanelBubbleCard';
import { eventsUserInformationContainer } from './userInformationContainer';
import type { EventsUserInformationContainer } from './userInformationContainer';
import { eventsDiscountActivityButton } from './discountActivityButton';
import type { EventsDiscountActivityButton } from './discountActivityButton';

export type Actions = {
  eventsLeftComponentDiv0Div0Div1: EventsLeftComponentDiv0Div0Div1;
  eventsAddNewConversation: EventsAddNewConversation;
  eventsCollapseSidebarButton: EventsCollapseSidebarButton;
  eventsLeftComponentDiv1Div1Div1Div1Div0: EventsLeftComponentDiv1Div1Div1Div1Div0;
  eventsUserInformationContainer: EventsUserInformationContainer;
  eventsDiscountActivityButton: EventsDiscountActivityButton;
};

export {
  onAutomaticallyCreateASessionUponFirstLogin,
  eventsLeftComponentDiv0Div0Div1,
  onDetermineWhetherItAnAddConversation,
  eventsAddNewConversation,
  eventsCollapseSidebarButton,
  eventsLeftComponentDiv1Div1Div1Div1Div0,
  onInitializeUserDialogueCardList,
  onInitializeSettingsPanelBubbleCard,
  eventsUserInformationContainer,
  eventsDiscountActivityButton,
};
