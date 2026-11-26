import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';
import { message } from 'antd';

/**
 * 监听选中变化回调
 * 唯一id: testPage-onMonitorSelectedChangesAndCallback
 */
export const onMonitorSelectedChangesAndCallback = (
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

  // 获取选中行的数据
  if (!event?.api) {
    return;
  }
  
  const selectedRows = event.api.getSelectedRows();
  if (!selectedRows || selectedRows.length === 0) {
    return;
  }

  message.info('选中行数据:', selectedRows);
  console.log('选中行数据:', selectedRows);

  // 可以在这里做进一步处理，比如：
  // - 批量操作选中的数据
  // - 更新按钮可用状态
  // - 打开编辑弹窗

  /*
   * [END OF YOUR CODE]
   */
};
