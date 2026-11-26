import { flowOnInitializeAGGRId } from '../../flows/OnInitializeAGGRId';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';
import { message } from 'antd';

/**
 * 初始化AGGRID
 * 唯一id: testPage-onInitializeAGGRId
 */
export const onInitializeAGGRId = (
  setter: Setter,
  dispatch: Dispatch,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnInitializeAGGRId({ setter, dispatch }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
  });
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  // 设置列定义
  setter.setColumnDefs([
    { field: 'athlete' },
    { field: 'age' },
    { field: 'country' },
    { field: 'sport' },
    { field: 'year' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ]);

  // 加载远程数据
  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then((res) => res.json())
    .then((data) => setter.setRowData(data.slice(0, 50)));

  // 设置行点击回调
  setter.setOnRowClicked((event: any) => {
    const rowData = event?.data;
    if (!rowData) {
      return;
    }
    message.info('点击行:', rowData);
  });

  // 设置选中变化回调
  setter.setOnSelectionChanged((event: any) => {
    if (!event?.api) {
      return;
    }
    const selected = event.api.getSelectedRows();
    message.info('选中行:', selected);
  });

  // 设置表格就绪回调
  setter.setOnGridReady(() => {
    message.info('表格就绪');
  });

  /*
   * [END OF YOUR CODE]
   */
};
