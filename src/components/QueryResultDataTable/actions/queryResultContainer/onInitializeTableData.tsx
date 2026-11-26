import { flowOnInitializeTableData } from '../../flows/OnInitializeTableData';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 初始化表格数据
 * 唯一id: queryResultDataTable-onInitializeTableData
 */
export const onInitializeTableData = (
  setter: Setter,
  dispatch: Dispatch,
  fileUrl: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnInitializeTableData({ setter, dispatch, fileUrl }).then((result) => {
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


  /*
   * [END OF YOUR CODE]
   */
};
