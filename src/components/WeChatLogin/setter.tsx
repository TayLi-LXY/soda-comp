

export type Setter = {
  // 二维码展示组件二维码扫描内容设置
  setQRCodeDisplayComponentCodeContent: React.Dispatch<React.SetStateAction<string>>;
  // 二维码展示组件二维码生成级别设置
  setQRCodeDisplayComponentLevel: React.Dispatch<React.SetStateAction<'L' | 'M' | 'Q' | 'H'>>;
  // 二维码展示组件logo图片设置
  setQRCodeDisplayComponentLogoImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 二维码展示组件logo宽度设置
  setQRCodeDisplayComponentLogoWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 二维码展示组件logo高度设置
  setQRCodeDisplayComponentLogoHeight: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 二维码展示组件二维码尺寸设置
  setQRCodeDisplayComponentQrCodeSize: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 二维码展示组件二维码密度设置
  setQRCodeDisplayComponentQRCodeDensity: React.Dispatch<React.SetStateAction<'L' | 'M' | 'Q' | 'H'>>;
  // 二维码展示组件logo透明度设置
  setQRCodeDisplayComponentLogoOpacity: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 二维码展示组件是否移除logo遮挡部分二维码设置
  setQRCodeDisplayComponentRemoveQrCodeBehindLogo: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};