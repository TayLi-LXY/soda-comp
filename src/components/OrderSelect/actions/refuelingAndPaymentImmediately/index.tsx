import { onCreatePaymentOrder } from './onCreatePaymentOrder';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

export type EventsRefuelingAndPaymentImmediately = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsRefuelingAndPaymentImmediately = (
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  memberType: string | undefined,
): EventsRefuelingAndPaymentImmediately => {
  return {
    onClick: (event) => onCreatePaymentOrder(event, setter, dispatch, loggedinUser, memberType),
  };
};
