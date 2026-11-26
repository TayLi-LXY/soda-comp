import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * conversationId 对话ID
 */
export interface FlowOnInitializeFileAndSchemaListParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  conversationId: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeFileAndSchemaListResults {
}

/**
 * 初始化文件和schema列表
 * @com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_INITIALIZE_FILE_AND_SCHEMA_LIST
 */
export const flowOnInitializeFileAndSchemaList = async (params: FlowOnInitializeFileAndSchemaListParams): Promise<FlowOnInitializeFileAndSchemaListResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_INITIALIZE_FILE_AND_SCHEMA_LIST', { ...params });
};
