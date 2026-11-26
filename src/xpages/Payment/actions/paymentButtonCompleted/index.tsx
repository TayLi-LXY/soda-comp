import { onPaymentCallbackCompletedSeriousIllnessDirectedURL } from './onPaymentCallbackCompletedSeriousIllnessDirectedURL';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsPaymentButtonCompleted = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsPaymentButtonCompleted = (
  setter: Setter,
  dispatch: Dispatch,
  redirectURL: string | undefined,
  orderNumber: string | undefined,
  selectPaymentMethod: boolean,
  paymentCompletionCallback: (payOrderNumber: string) => void,
  paymentAccountId: string | undefined,
): EventsPaymentButtonCompleted => {
  return {
    onClick: (event) => onPaymentCallbackCompletedSeriousIllnessDirectedURL(event, setter, dispatch, redirectURL, orderNumber, selectPaymentMethod, paymentCompletionCallback, paymentAccountId),
  };
};
