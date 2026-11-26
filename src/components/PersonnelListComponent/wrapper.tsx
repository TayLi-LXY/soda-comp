'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { PersonnelListComponentWrapperProps } from './types';
import { onInitializeInvitePersonnelPermissionsSelectComponent } from './actions';
import type { DefaultOptionType } from 'rc-select/lib/Select';
import type { Setter } from './setter';
import PersonnelListComponentComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 人员列表组件
 */
const PersonnelListComponentWrapper: React.FC<PersonnelListComponentWrapperProps> = (props) => {
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
  // 列表控制数据: 人员列表(personnelList)
  const [personnelList, setPersonnelList] = useState<any[]>([]);
  // 内部可变数据: 邀请人员权限选择组件选项(invitePersonnelPermissionsSelectComponentOptions)
  const [invitePersonnelPermissionsSelectComponentOptions, setInvitePersonnelPermissionsSelectComponentOptions] = useState<DefaultOptionType[]>([{"label":"选项1","value":"1"},{"label":"选项2","value":"2"}]);
  const setter: Setter = useMemo(() => { return { setPersonnelList, setInvitePersonnelPermissionsSelectComponentOptions };}, []);

  // 组件invitePersonnelPermissionsSelectComponent数据变化触发的交互入口：初始化邀请人员权限选择组件
  useEffect(() => onInitializeInvitePersonnelPermissionsSelectComponent(setter, dispatch), [setter, dispatch]);


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
    <PersonnelListComponentComponent 
      entity={entity}
      index={index}
      personnelList={personnelList}
      setPersonnelList={setPersonnelList}
      invitePersonnelPermissionsSelectComponentOptions={invitePersonnelPermissionsSelectComponentOptions}
      setInvitePersonnelPermissionsSelectComponentOptions={setInvitePersonnelPermissionsSelectComponentOptions}
    />
  );
};

export default PersonnelListComponentWrapper;
