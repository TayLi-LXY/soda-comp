import type { SubscriptionPackage } from '@/flows/com.horsecoder.platform.mall.dialogue/SearchForPackagesBasedOnCode/types/SubscriptionPackage';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * setter 页面设置器
 * subscriptionPackage 订阅套餐
 */
export interface FlowCodeInitializePaymentOrderDataParams {
  dispatch: any;
  setter: any;
  subscriptionPackage: SubscriptionPackage;
}

/**
 * 出参明细:
 */
export interface FlowCodeInitializePaymentOrderDataResults {
}

/**
 * 设置支付订单初始化数据
 * FLOW_NODE_INITIALIZE_PAYMENT_ORDER_DATA
 * 唯一id: Payment/FLOW_CODE_INITIALIZE_PAYMENT_ORDER_DATA
 */
export const flowCodeInitializePaymentOrderData = async (params: FlowCodeInitializePaymentOrderDataParams): Promise<FlowCodeInitializePaymentOrderDataResults> => {
  // 初始化流程出参
  // 开始流程
  const { dispatch } = params;
  const { setter } = params;
  const { subscriptionPackage } = params;

  if (subscriptionPackage != null && subscriptionPackage.comboName != null) {
    setter.setComboName(subscriptionPackage.comboName);
    setter.setPackageIntroduction(subscriptionPackage.description || '先进AI+BI技术的更高使用权限');
    setter.setPackageBenefits(subscriptionPackage.benefits);
    setter.setSetMealPrice(subscriptionPackage.originalPrice);
    setter.setPromotionAmount(subscriptionPackage.promotionalPrice);
    const payable = Number(((subscriptionPackage.originalPrice || 0) - (subscriptionPackage.promotionalPrice || 0)).toFixed(2));
    setter.setAmountPayable(payable);
    console.log('[初始化支付订单数据] 套餐:', subscriptionPackage.comboName, ', 应付:', payable);
  } else {
    setter.setComboName(undefined);
    setter.setPackageIntroduction(undefined);
    setter.setPackageBenefits(undefined);
    setter.setSetMealPrice(undefined);
    setter.setPromotionAmount(undefined);
    setter.setAmountPayable(undefined);
    console.warn('[初始化支付订单数据] subscriptionPackage 或 comboName 为空');
  }


  
  // 结束流程
  return {}
};
