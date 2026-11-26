import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickOpenPaymentModalParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOpenPaymentModalResults {
}

/**
 * 点击打开支付弹窗
 * @com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_CLICK_OPEN_PAYMENT_MODAL
 */
export const flowOnClickOpenPaymentModal = async (params: FlowOnClickOpenPaymentModalParams): Promise<FlowOnClickOpenPaymentModalResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_CLICK_OPEN_PAYMENT_MODAL', { ...params });
};
