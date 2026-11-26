import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';
import { message } from 'antd';

/**
 * 监听行点击回调
 * 唯一id: testPage-onMonitorLineClickCallback
 */
export const onMonitorLineClickCallback = (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
): void => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  // 获取点击行的数据
  const rowData = event?.data;
  if (!rowData) {
    return;
  }

  message.info('点击了行数据:', rowData);

  // 可以在这里做进一步处理，比如：
  // - 跳转到详情页
  // - 打开弹窗
  // - 更新状态

  /*
   * [END OF YOUR CODE]
   */
};
