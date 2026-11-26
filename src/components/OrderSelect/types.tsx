import type { Actions } from './actions';
import type { User } from '@/types/com.horsecoder.identity/sys/User';


export type OrderSelectWrapperProps =  {
};

export type OrderSelectProps = {
  actions: Actions;
  loggedinUser: User | undefined;
  memberType: string | undefined;
  paymentOrderNumber: string | undefined;
  setPaymentOrderNumber: (paymentOrderNumber: string | undefined) => void;
  freeVersionVisible: boolean;
  setFreeVersionVisible: (freeVersionVisible: boolean) => void;
  proVisible: boolean;
  setProVisible: (proVisible: boolean) => void;
  maxVisible: boolean;
  setMaxVisible: (maxVisible: boolean) => void;
  ultraVisible: boolean;
  setUltraVisible: (ultraVisible: boolean) => void;
  businessVisible: boolean;
  setBusinessVisible: (businessVisible: boolean) => void;
  orderPromptVisibleControl: boolean;
  setOrderPromptVisibleControl: (orderPromptVisibleControl: boolean) => void;
  allPackageButtonsAreVisible: boolean;
  setAllPackageButtonsAreVisible: (allPackageButtonsAreVisible: boolean) => void;
  toggleButton: boolean;
  setToggleButton: (toggleButton: boolean) => void;
  fQAVisibleControl: boolean;
  setFQAVisibleControl: (fQAVisibleControl: boolean) => void;
};

