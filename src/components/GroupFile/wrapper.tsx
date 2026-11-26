'use client';
import React, { useState } from 'react';
import type { GroupFileWrapperProps } from './types';
import GroupFileComponent from './index';


/**
 * 组件逻辑: 群文件
 */
const GroupFileWrapper: React.FC<GroupFileWrapperProps> = (props) => {
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
  // 内部数据: 对话文件列表(dialogueFileList)
  const { dialogueFileList } = props;
  // 列表控制数据: 群文件列表(groupFileList)
  const [groupFileList, setGroupFileList] = useState<any[]>([]);

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
    <GroupFileComponent 
      dialogueFileList={dialogueFileList}
      groupFileList={groupFileList}
      setGroupFileList={setGroupFileList}
    />
  );
};

export default GroupFileWrapper;
