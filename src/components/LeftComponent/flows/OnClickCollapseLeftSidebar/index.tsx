import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickCollapseLeftSidebarParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickCollapseLeftSidebarResults {
}

/**
 * 点击收起左侧边栏
 * @com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_COLLAPSE_LEFT_SIDEBAR
 */
export const flowOnClickCollapseLeftSidebar = async (params: FlowOnClickCollapseLeftSidebarParams): Promise<FlowOnClickCollapseLeftSidebarResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_COLLAPSE_LEFT_SIDEBAR', { ...params });
};
