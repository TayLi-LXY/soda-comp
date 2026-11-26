

export type Setter = {
  // 支付地址设置
  setPaymentAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 是否选择支付方式设置
  setSelectPaymentMethod: React.Dispatch<React.SetStateAction<boolean>>;
  // 套餐名称设置
  setComboName: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 套餐简介设置
  setPackageIntroduction: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 套餐权益设置
  setPackageBenefits: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 套餐价格设置
  setSetMealPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 促销金额设置
  setPromotionAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 应付金额设置
  setAmountPayable: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 支付二维码可见控制设置
  setVisibleControlOfPaymentQRCode: React.Dispatch<React.SetStateAction<boolean>>;
  // 支付二维码二维码扫描内容设置
  setPaymentQRCodeCodeContent: React.Dispatch<React.SetStateAction<string>>;
  // 支付二维码二维码生成级别设置
  setPaymentQRCodeLevel: React.Dispatch<React.SetStateAction<'L' | 'M' | 'Q' | 'H'>>;
  // 支付二维码logo图片设置
  setPaymentQRCodeLogoImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 支付二维码logo宽度设置
  setPaymentQRCodeLogoWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 支付二维码logo高度设置
  setPaymentQRCodeLogoHeight: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 支付二维码二维码尺寸设置
  setPaymentQRCodeQrCodeSize: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 支付二维码二维码密度设置
  setPaymentQRCodeQRCodeDensity: React.Dispatch<React.SetStateAction<'L' | 'M' | 'Q' | 'H'>>;
  // 支付二维码logo透明度设置
  setPaymentQRCodeLogoOpacity: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 支付二维码是否移除logo遮挡部分二维码设置
  setPaymentQRCodeRemoveQrCodeBehindLogo: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  // 支付提示设置
  setPaymentReminder: React.Dispatch<React.SetStateAction<string>>;
};