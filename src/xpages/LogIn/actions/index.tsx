import { eventsAccountLoginButton } from './accountLoginButton';
import type { EventsAccountLoginButton } from './accountLoginButton';
import { eventsVerificationCodeLoginSwitchButton } from './verificationCodeLoginSwitchButton';
import type { EventsVerificationCodeLoginSwitchButton } from './verificationCodeLoginSwitchButton';
import { eventsImageCaptchaButton } from './imageCaptchaButton';
import type { EventsImageCaptchaButton } from './imageCaptchaButton';
import { onRefreshGraphicCaptcha } from './imageCaptchaButton/onRefreshGraphicCaptcha';
import { eventsAccountLogin } from './accountLogin';
import type { EventsAccountLogin } from './accountLogin';
import { eventsGetSMSButton } from './getSMSButton';
import type { EventsGetSMSButton } from './getSMSButton';
import { eventsVerificationCodeLoginButton } from './verificationCodeLoginButton';
import type { EventsVerificationCodeLoginButton } from './verificationCodeLoginButton';
import { eventsRegistrationJumpButton } from './registrationJumpButton';
import type { EventsRegistrationJumpButton } from './registrationJumpButton';
import { eventsWeChatLoginButton } from './weChatLoginButton';
import type { EventsWeChatLoginButton } from './weChatLoginButton';
import { eventsGoogleLoginButton } from './googleLoginButton';
import type { EventsGoogleLoginButton } from './googleLoginButton';

export type Actions = {
  eventsAccountLoginButton: EventsAccountLoginButton;
  eventsVerificationCodeLoginSwitchButton: EventsVerificationCodeLoginSwitchButton;
  eventsImageCaptchaButton: EventsImageCaptchaButton;
  eventsAccountLogin: EventsAccountLogin;
  eventsGetSMSButton: EventsGetSMSButton;
  eventsVerificationCodeLoginButton: EventsVerificationCodeLoginButton;
  eventsRegistrationJumpButton: EventsRegistrationJumpButton;
  eventsWeChatLoginButton: EventsWeChatLoginButton;
  eventsGoogleLoginButton: EventsGoogleLoginButton;
};

export {
  eventsAccountLoginButton,
  eventsVerificationCodeLoginSwitchButton,
  eventsImageCaptchaButton,
  onRefreshGraphicCaptcha,
  eventsAccountLogin,
  eventsGetSMSButton,
  eventsVerificationCodeLoginButton,
  eventsRegistrationJumpButton,
  eventsWeChatLoginButton,
  eventsGoogleLoginButton,
};
