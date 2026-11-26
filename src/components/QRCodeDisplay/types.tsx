

export type QRCodeDisplayWrapperProps =  {
  codeContent: string;
  level: 'L' | 'M' | 'Q' | 'H';
  logoImage: string | undefined;
  logoWidth: number | undefined;
  logoHeight: number | undefined;
  qrCodeSize: number | undefined;
  qRCodeDensity: 'L' | 'M' | 'Q' | 'H';
  logoOpacity: number | undefined;
  removeQrCodeBehindLogo: boolean | undefined;
};

export type QRCodeDisplayProps = {
  codeContent: string;
  level: 'L' | 'M' | 'Q' | 'H';
  logoImage: string | undefined;
  logoWidth: number | undefined;
  logoHeight: number | undefined;
  qrCodeSize: number | undefined;
  qRCodeDensity: 'L' | 'M' | 'Q' | 'H';
  logoOpacity: number | undefined;
  removeQrCodeBehindLogo: boolean | undefined;
};

