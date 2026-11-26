'use client';
import React, { useState } from 'react';
import type { LeftolbarBelowInputBoxWrapperProps } from './types';
import LeftolbarBelowInputBoxComponent from './index';


/**
 * 组件逻辑: 输入框下方左侧工具栏
 */
const LeftolbarBelowInputBoxWrapper: React.FC<LeftolbarBelowInputBoxWrapperProps> = () => {
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
  // 可见控制数据: 麦克风可见控制(visibleControlOfMicrophone)
  const [visibleControlOfMicrophone, setVisibleControlOfMicrophone] = useState<boolean>(false);

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
    <LeftolbarBelowInputBoxComponent 
      visibleControlOfMicrophone={visibleControlOfMicrophone}
      setVisibleControlOfMicrophone={setVisibleControlOfMicrophone}
    />
  );
};

export default LeftolbarBelowInputBoxWrapper;
