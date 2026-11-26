import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 初始化人员权限选择组件
 * 唯一id: personnelListSingleItem-onInitializePersonnelPermissionSelectComponent
 */
export const onInitializePersonnelPermissionSelectComponent = (
  setter: Setter,
  dispatch: Dispatch,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
setter.setPersonnelPermissionSelectComponentOptions([{"label":"管理员","value":"管理员"},{"label":"编辑","value":"编辑"},{"label":"查看","value":"查看"}]);  /*
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
