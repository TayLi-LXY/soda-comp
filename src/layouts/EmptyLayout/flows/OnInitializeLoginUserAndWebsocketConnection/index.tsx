import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 */
export interface FlowOnInitializeLoginUserAndWebsocketConnectionParams {
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeLoginUserAndWebsocketConnectionResults {
}

/**
 * 初始化登录用户和websocket连接
 * @com.horsecoder.platform.mall.umi.chat/emptyLayout/FLOW_ON_INITIALIZE_LOGIN_USER_AND_WEBSOCKET_CONNECTION
 */
export const flowOnInitializeLoginUserAndWebsocketConnection = async (params: FlowOnInitializeLoginUserAndWebsocketConnectionParams): Promise<FlowOnInitializeLoginUserAndWebsocketConnectionResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/emptyLayout/FLOW_ON_INITIALIZE_LOGIN_USER_AND_WEBSOCKET_CONNECTION', { ...params });
};
