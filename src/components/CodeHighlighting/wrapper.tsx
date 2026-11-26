'use client';
import React from 'react';
import type { CodeHighlightingWrapperProps } from './types';
import CodeHighlightingComponent from './index';


/**
 * 组件逻辑: 代码高亮
 */
const CodeHighlightingWrapper: React.FC<CodeHighlightingWrapperProps> = (props) => {
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
  // 内部数据: 语言(lang)
  const { lang } = props;
  // 内部数据: code(code)
  const { code } = props;

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
    <CodeHighlightingComponent 
      lang={lang}
      code={code}
    />
  );
};

export default CodeHighlightingWrapper;
