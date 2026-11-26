import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickExpandSidebarParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickExpandSidebarResults {
}

/**
 * 点击展开侧边栏
 * @com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_CLICK_EXPAND_SIDEBAR
 */
export const flowOnClickExpandSidebar = async (params: FlowOnClickExpandSidebarParams): Promise<FlowOnClickExpandSidebarResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_CLICK_EXPAND_SIDEBAR', { ...params });
};
