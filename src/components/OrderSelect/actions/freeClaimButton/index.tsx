import { onClickJumpPaymentPage } from './onClickJumpPaymentPage';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

export type EventsFreeClaimButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsFreeClaimButton = (
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  memberType: string | undefined,
): EventsFreeClaimButton => {
  return {
    onClick: (event) => onClickJumpPaymentPage(event, setter, dispatch, loggedinUser, memberType),
  };
};
