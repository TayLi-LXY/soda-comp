import type { Actions } from './actions';
import type { User } from '@/types/com.horsecoder.identity/sys/User';


export type PaymentWrapperProps =  {
  orderNumber: string | undefined;
  paymentAccountId: string | undefined;
  redirectURL: string | undefined;
  paymentCompletionCallback: (payOrderNumber: string) => void;
};

export type PaymentProps = {
  actions: Actions;
  paymentAddress: string | undefined;
  setPaymentAddress: (paymentAddress: string | undefined) => void;
  orderNumber: string | undefined;
  paymentAccountId: string | undefined;
  redirectURL: string | undefined;
  selectPaymentMethod: boolean;
  setSelectPaymentMethod: (selectPaymentMethod: boolean) => void;
  paymentCompletionCallback: (payOrderNumber: string) => void;
  loggedinUser: User | undefined;
  comboName: string | undefined;
  setComboName: (comboName: string | undefined) => void;
  packageIntroduction: string | undefined;
  setPackageIntroduction: (packageIntroduction: string | undefined) => void;
  packageBenefits: string | undefined;
  setPackageBenefits: (packageBenefits: string | undefined) => void;
  setMealPrice: number | undefined;
  setSetMealPrice: (setMealPrice: number | undefined) => void;
  promotionAmount: number | undefined;
  setPromotionAmount: (promotionAmount: number | undefined) => void;
  amountPayable: bigdecimal;
  setAmountPayable: (amountPayable: bigdecimal) => void;
  visibleControlOfPaymentQRCode: boolean;
  setVisibleControlOfPaymentQRCode: (visibleControlOfPaymentQRCode: boolean) => void;
  paymentQRCodeCodeContent: string;
  setPaymentQRCodeCodeContent: (paymentQRCodeCodeContent: string) => void;
  paymentQRCodeLevel: 'L' | 'M' | 'Q' | 'H';
  setPaymentQRCodeLevel: (paymentQRCodeLevel: 'L' | 'M' | 'Q' | 'H') => void;
  paymentQRCodeLogoImage: string | undefined;
  setPaymentQRCodeLogoImage: (paymentQRCodeLogoImage: string | undefined) => void;
  paymentQRCodeLogoWidth: number | undefined;
  setPaymentQRCodeLogoWidth: (paymentQRCodeLogoWidth: number | undefined) => void;
  paymentQRCodeLogoHeight: number | undefined;
  setPaymentQRCodeLogoHeight: (paymentQRCodeLogoHeight: number | undefined) => void;
  paymentQRCodeQrCodeSize: number | undefined;
  setPaymentQRCodeQrCodeSize: (paymentQRCodeQrCodeSize: number | undefined) => void;
  paymentQRCodeQRCodeDensity: 'L' | 'M' | 'Q' | 'H';
  setPaymentQRCodeQRCodeDensity: (paymentQRCodeQRCodeDensity: 'L' | 'M' | 'Q' | 'H') => void;
  paymentQRCodeLogoOpacity: number | undefined;
  setPaymentQRCodeLogoOpacity: (paymentQRCodeLogoOpacity: number | undefined) => void;
  paymentQRCodeRemoveQrCodeBehindLogo: boolean | undefined;
  setPaymentQRCodeRemoveQrCodeBehindLogo: (paymentQRCodeRemoveQrCodeBehindLogo: boolean | undefined) => void;
  paymentReminder: string;
  setPaymentReminder: (paymentReminder: string) => void;
};

