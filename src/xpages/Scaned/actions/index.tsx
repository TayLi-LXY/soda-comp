import { onObtainWeChatUserInformation } from './weChatCallbackPage/onObtainWeChatUserInformation';
import { eventsGetVerificationCodeButton } from './getVerificationCodeButton';
import type { EventsGetVerificationCodeButton } from './getVerificationCodeButton';
import { eventsBindPhoneNumberButton } from './bindPhoneNumberButton';
import type { EventsBindPhoneNumberButton } from './bindPhoneNumberButton';

export type Actions = {
  eventsGetVerificationCodeButton: EventsGetVerificationCodeButton;
  eventsBindPhoneNumberButton: EventsBindPhoneNumberButton;
};

export {
  onObtainWeChatUserInformation,
  eventsGetVerificationCodeButton,
  eventsBindPhoneNumberButton,
};
