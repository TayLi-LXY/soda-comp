import { message } from 'antd';
import { flowOnInitializeLoginUserAndWebsocketConnection } from '../../flows/OnInitializeLoginUserAndWebsocketConnection';
import type { Dispatch } from 'redux';
import { forwardLogin } from '@/src/logic/forwards';

/**
 * 初始化登录用户和websocket连接
 * 唯一id: emptyLayout-onInitializeLoginUserAndWebsocketConnection
 */
export const onInitializeLoginUserAndWebsocketConnection = (
  dispatch: Dispatch,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnInitializeLoginUserAndWebsocketConnection({ dispatch }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
    message.error('用户未登录');
    forwardLogin();
  });
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
};
