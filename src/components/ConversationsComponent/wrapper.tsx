'use client';
import React from 'react';
import type { ConversationsComponentWrapperProps } from './types';
import ConversationsComponentComponent from './index';


/**
 * 组件逻辑: 管理对话组件
 */
const ConversationsComponentWrapper: React.FC<ConversationsComponentWrapperProps> = (props) => {
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
  // 内部数据: 单项(items)
  const { items } = props;
  // 内部数据: 当前选中的值(activeKey)
  const { activeKey } = props;
  // 内部数据: 语义化结构样式(styles)
  const { styles } = props;
  // 内部数据: 语义化结构类名(classNames)
  const { classNames } = props;
  // 内部数据: 根节点类名(rootClassName)
  const { rootClassName } = props;

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
    <ConversationsComponentComponent 
      items={items}
      activeKey={activeKey}
      styles={styles}
      classNames={classNames}
      rootClassName={rootClassName}
    />
  );
};

export default ConversationsComponentWrapper;
