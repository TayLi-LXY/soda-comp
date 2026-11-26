import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 初始化展开收起
 * 唯一id: sendMessageFileCard-onInitializeExpandCollapse
 */
export const onInitializeExpandCollapse = (
  setter: Setter,
  dispatch: Dispatch,
  entity: any,
) => {
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

  if (entity && entity.ifSelected) {
    setter.setDisplayContentUnderCard('收起');
  } else {
    setter.setDisplayContentUnderCard('点击展开');
  }

  /*
   * [END OF YOUR CODE]
   */
};
