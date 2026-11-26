import type { Actions } from './actions';


export type WeChatLoginWrapperProps =  {
};

export type WeChatLoginProps = {
  actions: Actions;
  qRCodeDisplayComponentCodeContent: string;
  setQRCodeDisplayComponentCodeContent: (qRCodeDisplayComponentCodeContent: string) => void;
  qRCodeDisplayComponentLevel: 'L' | 'M' | 'Q' | 'H';
  setQRCodeDisplayComponentLevel: (qRCodeDisplayComponentLevel: 'L' | 'M' | 'Q' | 'H') => void;
  qRCodeDisplayComponentLogoImage: string | undefined;
  setQRCodeDisplayComponentLogoImage: (qRCodeDisplayComponentLogoImage: string | undefined) => void;
  qRCodeDisplayComponentLogoWidth: number | undefined;
  setQRCodeDisplayComponentLogoWidth: (qRCodeDisplayComponentLogoWidth: number | undefined) => void;
  qRCodeDisplayComponentLogoHeight: number | undefined;
  setQRCodeDisplayComponentLogoHeight: (qRCodeDisplayComponentLogoHeight: number | undefined) => void;
  qRCodeDisplayComponentQrCodeSize: number | undefined;
  setQRCodeDisplayComponentQrCodeSize: (qRCodeDisplayComponentQrCodeSize: number | undefined) => void;
  qRCodeDisplayComponentQRCodeDensity: 'L' | 'M' | 'Q' | 'H';
  setQRCodeDisplayComponentQRCodeDensity: (qRCodeDisplayComponentQRCodeDensity: 'L' | 'M' | 'Q' | 'H') => void;
  qRCodeDisplayComponentLogoOpacity: number | undefined;
  setQRCodeDisplayComponentLogoOpacity: (qRCodeDisplayComponentLogoOpacity: number | undefined) => void;
  qRCodeDisplayComponentRemoveQrCodeBehindLogo: boolean | undefined;
  setQRCodeDisplayComponentRemoveQrCodeBehindLogo: (qRCodeDisplayComponentRemoveQrCodeBehindLogo: boolean | undefined) => void;
};

