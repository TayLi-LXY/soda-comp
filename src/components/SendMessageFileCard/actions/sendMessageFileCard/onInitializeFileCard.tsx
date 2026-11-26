import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 初始化文件卡片
 * 唯一id: sendMessageFileCard-onInitializeFileCard
 */
export const onInitializeFileCard = (
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

  if (!entity) return;
  setter.setName(entity.fileName);
  setter.setByte(entity.fileSize);

  /*
   * [END OF YOUR CODE]
   */
};
