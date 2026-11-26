'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { PersonnelListSingleItemWrapperProps } from './types';
import { onInitializePersonnelPermissionSelectComponent } from './actions';
import type { DefaultOptionType } from 'rc-select/lib/Select';
import type { Setter } from './setter';
import PersonnelListSingleItemComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 人员列表单项
 */
const PersonnelListSingleItemWrapper: React.FC<PersonnelListSingleItemWrapperProps> = (props) => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  const dispatch = useDispatch();
  // 内部数据: 创建群聊成员列表单项(entity)
  const { entity } = props;
  // 内部数据: 索引(index)
  const { index } = props;
  // 内部可变数据: 人员权限选择组件选项(personnelPermissionSelectComponentOptions)
  const [personnelPermissionSelectComponentOptions, setPersonnelPermissionSelectComponentOptions] = useState<DefaultOptionType[]>([{"label":"管理员","value":"管理员"},{"label":"编辑","value":"编辑"},{"label":"查看","value":"查看"}]);
  const setter: Setter = useMemo(() => { return { setPersonnelPermissionSelectComponentOptions };}, []);

  // 组件personnelPermissionSelectComponent数据变化触发的交互入口：初始化人员权限选择组件
  useEffect(() => onInitializePersonnelPermissionSelectComponent(setter, dispatch), [setter, dispatch]);


  /*
   * end
   */

  /*
   * 获取父组件传值
   * 定义当前组件数据
   * 定义静态变量
   * 获取组件redux数据
   * 获取组件挂载模型数据
   * 获取组件挂载流程数据
   * 装配子组件数据
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  return (
    <PersonnelListSingleItemComponent 
      entity={entity}
      index={index}
      personnelPermissionSelectComponentOptions={personnelPermissionSelectComponentOptions}
      setPersonnelPermissionSelectComponentOptions={setPersonnelPermissionSelectComponentOptions}
    />
  );
};

export default PersonnelListSingleItemWrapper;
