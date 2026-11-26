import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickOpenAndCloseSQLComponentParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOpenAndCloseSQLComponentResults {
}

/**
 * 点击打开和关闭sql组件
 * @com.horsecoder.platform.mall.umi.chat/queryResultDisplayComponent/FLOW_ON_CLICK_OPEN_AND_CLOSE_S_Q_L_COMPONENT
 */
export const flowOnClickOpenAndCloseSQLComponent = async (params: FlowOnClickOpenAndCloseSQLComponentParams): Promise<FlowOnClickOpenAndCloseSQLComponentResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/queryResultDisplayComponent/FLOW_ON_CLICK_OPEN_AND_CLOSE_S_Q_L_COMPONENT', { ...params });
};
