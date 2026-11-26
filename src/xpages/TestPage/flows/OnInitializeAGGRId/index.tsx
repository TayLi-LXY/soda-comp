import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnInitializeAGGRIdParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeAGGRIdResults {
}

/**
 * 初始化AGGRID
 * @com.horsecoder.platform.mall.umi.chat/testPage/FLOW_ON_INITIALIZE_A_G_G_R_ID
 */
export const flowOnInitializeAGGRId = async (params: FlowOnInitializeAGGRIdParams): Promise<FlowOnInitializeAGGRIdResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/testPage/FLOW_ON_INITIALIZE_A_G_G_R_ID', { ...params });
};
