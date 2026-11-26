import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickDisplayEnterprisePackageParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickDisplayEnterprisePackageResults {
}

/**
 * 点击显示企业套餐
 * @com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_DISPLAY_ENTERPRISE_PACKAGE
 */
export const flowOnClickDisplayEnterprisePackage = async (params: FlowOnClickDisplayEnterprisePackageParams): Promise<FlowOnClickDisplayEnterprisePackageResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_DISPLAY_ENTERPRISE_PACKAGE', { ...params });
};
