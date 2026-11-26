import { flowOnUpgradePlanCancel } from '../../flows/OnUpgradePlanCancel';
import type { Dispatch } from 'redux';

/**
 * 关闭升级套餐
 * 唯一id: main-onUpgradePlanCancel
 */
export const onUpgradePlanCancel = async (
  event: any,
  dispatch: Dispatch,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnUpgradePlanCancel({ dispatch }).then((result) => {
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
