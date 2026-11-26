import { onInitializeGraphicCaptcha } from './registrationPage/onInitializeGraphicCaptcha';
import { eventsImageCaptchaButton } from './imageCaptchaButton';
import type { EventsImageCaptchaButton } from './imageCaptchaButton';
import { eventsMobileVerificationCodeSendButton } from './mobileVerificationCodeSendButton';
import type { EventsMobileVerificationCodeSendButton } from './mobileVerificationCodeSendButton';
import { eventsRegisterButton } from './registerButton';
import type { EventsRegisterButton } from './registerButton';
import { eventsLoginJumpButton } from './loginJumpButton';
import type { EventsLoginJumpButton } from './loginJumpButton';
import { eventsWeChatRegistrationButton } from './weChatRegistrationButton';
import type { EventsWeChatRegistrationButton } from './weChatRegistrationButton';

export type Actions = {
  eventsImageCaptchaButton: EventsImageCaptchaButton;
  eventsMobileVerificationCodeSendButton: EventsMobileVerificationCodeSendButton;
  eventsRegisterButton: EventsRegisterButton;
  eventsLoginJumpButton: EventsLoginJumpButton;
  eventsWeChatRegistrationButton: EventsWeChatRegistrationButton;
};

export {
  onInitializeGraphicCaptcha,
  eventsImageCaptchaButton,
  eventsMobileVerificationCodeSendButton,
  eventsRegisterButton,
  eventsLoginJumpButton,
  eventsWeChatRegistrationButton,
};
