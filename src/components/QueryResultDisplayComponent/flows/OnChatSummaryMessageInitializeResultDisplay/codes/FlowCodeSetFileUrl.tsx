
/**
 * 入参明细:
 * setter 页面设置器
 * fileUrl 文件链接
 */
export interface FlowCodeSetFileUrlParams {
  setter: any;
  fileUrl: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetFileUrlResults {
}

/**
 * 设置数据:文件链接
 * FLOW_NODE_SET_FILE_URL
 * 唯一id: QueryResultDisplayComponent/FLOW_CODE_SET_FILE_URL
 */
export const flowCodeSetFileUrl = async (params: FlowCodeSetFileUrlParams): Promise<FlowCodeSetFileUrlResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { fileUrl } = params;
  setter.setFileUrl(fileUrl);
  // 结束流程
  return {}
};
