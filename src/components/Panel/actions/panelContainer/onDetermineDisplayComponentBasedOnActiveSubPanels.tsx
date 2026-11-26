import { flowOnDetermineDisplayComponentBasedOnActiveSubPanels } from '../../flows/OnDetermineDisplayComponentBasedOnActiveSubPanels';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 根据活跃子面板决定展示组件
 * 唯一id: panel-onDetermineDisplayComponentBasedOnActiveSubPanels
 */
export const onDetermineDisplayComponentBasedOnActiveSubPanels = (
  setter: Setter,
  dispatch: Dispatch,
  activeSubpanel: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnDetermineDisplayComponentBasedOnActiveSubPanels({ setter, dispatch, activeSubpanel }).then((result) => {
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
