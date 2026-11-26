
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeOnClickOpenAndCloseSQLComponentParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickOpenAndCloseSQLComponentResults {
}

/**
 * 点击打开和关闭sql组件
 * FLOW_NODE_ON_CLICK_OPEN_AND_CLOSE_S_Q_L_COMPONENT
 * 唯一id: QueryResultDisplayComponent/FLOW_CODE_ON_CLICK_OPEN_AND_CLOSE_S_Q_L_COMPONENT
 */
export const flowCodeOnClickOpenAndCloseSQLComponent = async (params: FlowCodeOnClickOpenAndCloseSQLComponentParams): Promise<FlowCodeOnClickOpenAndCloseSQLComponentResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setSQLComponentVisibleControl((prev: boolean) => !prev);
  // 结束流程
  return {}
};
