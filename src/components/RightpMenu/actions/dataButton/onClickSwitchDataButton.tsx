import { flowOnClickSwitchDataButton } from '../../flows/OnClickSwitchDataButton';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 点击切换到数据按钮
 * 唯一id: rightpMenu-onClickSwitchDataButton
 */
export const onClickSwitchDataButton = async (
  event: any,
  setter: Setter,
  dispatch: Dispatch,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickSwitchDataButton({ setter, dispatch }).then((result) => {
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
