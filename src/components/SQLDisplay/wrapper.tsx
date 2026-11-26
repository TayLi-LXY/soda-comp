'use client';
import React, { useState } from 'react';
import type { SQLDisplayWrapperProps } from './types';
import SQLDisplayComponent from './index';


/**
 * 组件逻辑: SQL展示
 */
const SQLDisplayWrapper: React.FC<SQLDisplayWrapperProps> = () => {
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
  // 内部可变数据: sql语句(sQLStatement)
  const [sQLStatement, setSQLStatement] = useState<string | undefined>('SELECT id,username,phone FROM user_info;');

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
    <SQLDisplayComponent 
      sQLStatement={sQLStatement}
      setSQLStatement={setSQLStatement}
    />
  );
};

export default SQLDisplayWrapper;
