import { onClickCancelOrder } from './onClickCancelOrder';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

export type EventsPromptCancelOrderButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsPromptCancelOrderButton = (
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  paymentOrderNumber: string | undefined,
): EventsPromptCancelOrderButton => {
  return {
    onClick: (event) => onClickCancelOrder(event, setter, dispatch, loggedinUser, paymentOrderNumber),
  };
};
