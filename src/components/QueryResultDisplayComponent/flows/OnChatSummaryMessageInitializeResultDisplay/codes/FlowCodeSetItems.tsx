
/**
 * 入参明细:
 * setter 页面设置器
 * items 提示词列表
 */
export interface FlowCodeSetItemsParams {
  setter: any;
  items: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetItemsResults {
}

/**
 * 设置数据:提示词列表
 * FLOW_NODE_SET_ITEMS
 * 唯一id: QueryResultDisplayComponent/FLOW_CODE_SET_ITEMS
 */
export const flowCodeSetItems = async (params: FlowCodeSetItemsParams): Promise<FlowCodeSetItemsResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { items } = params;
  setter.setItems(items);
  // 结束流程
  return {}
};
