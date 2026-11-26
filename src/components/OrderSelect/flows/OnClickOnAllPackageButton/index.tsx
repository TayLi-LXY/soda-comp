import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickOnAllPackageButtonParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOnAllPackageButtonResults {
}

/**
 * 点击全部套餐按钮
 * @com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_ON_ALL_PACKAGE_BUTTON
 */
export const flowOnClickOnAllPackageButton = async (params: FlowOnClickOnAllPackageButtonParams): Promise<FlowOnClickOnAllPackageButtonResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_ON_ALL_PACKAGE_BUTTON', { ...params });
};
