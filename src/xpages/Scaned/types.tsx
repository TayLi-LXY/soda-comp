import type { Actions } from './actions';
import type { FormInstance } from 'antd';


export type ScanedWrapperProps =  {
};

export type ScanedProps = {
  actions: Actions;
  code: string | undefined;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  visibleControlInLoginPanel: boolean;
  setVisibleControlInLoginPanel: (visibleControlInLoginPanel: boolean) => void;
  mobileVerificationFormVisibleControl: boolean;
  setMobileVerificationFormVisibleControl: (mobileVerificationFormVisibleControl: boolean) => void;
  registrationMobileVerificationForm: FormInstance<any>;
  countdownData: string;
  setCountdownData: (countdownData: string) => void;
  buttonDisable: boolean;
  setButtonDisable: (buttonDisable: boolean) => void;
};

