import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * setter 页面设置器
 * fileUrl 文件链接
 */
export interface FlowOnInitializeTableDataParams {
  dispatch: any;
  setter?: any;
  fileUrl: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeTableDataResults {
}

/**
 * 初始化表格数据
 * @com.horsecoder.platform.mall.umi.chat/queryResultDataTable/FLOW_ON_INITIALIZE_TABLE_DATA
 */
export const flowOnInitializeTableData = async (params: FlowOnInitializeTableDataParams): Promise<FlowOnInitializeTableDataResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/queryResultDataTable/FLOW_ON_INITIALIZE_TABLE_DATA', { ...params });
};
