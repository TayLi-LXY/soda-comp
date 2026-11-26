import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnInitializeTaskParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeTaskResults {
}

/**
 * 初始化任务
 * @com.horsecoder.platform.mall.umi.chat/taskList/FLOW_ON_INITIALIZE_TASK
 */
export const flowOnInitializeTask = async (params: FlowOnInitializeTaskParams): Promise<FlowOnInitializeTaskResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/taskList/FLOW_ON_INITIALIZE_TASK', { ...params });
};
