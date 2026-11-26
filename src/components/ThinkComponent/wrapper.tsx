'use client';
import React from 'react';
import type { ThinkComponentWrapperProps } from './types';
import ThinkComponentComponent from './index';


/**
 * 组件逻辑: 思考过程组件
 */
const ThinkComponentWrapper: React.FC<ThinkComponentWrapperProps> = (props) => {
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
  // 内部数据: 样式类名(classNames)
  const { classNames } = props;
  // 内部数据: 样式 style(styles)
  const { styles } = props;
  // 内部数据: 内容(children)
  const { children } = props;
  // 内部数据: 状态文本(title)
  const { title } = props;
  // 内部数据: 加载中(loading)
  const { loading } = props;
  // 内部数据: 默认是否展开(defaultExpanded)
  const { defaultExpanded } = props;
  // 内部数据: 闪动模式(blink)
  const { blink } = props;
  // 内部数据: 展开事件(onExpand)
  const { onExpand } = props;

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
    <ThinkComponentComponent 
      classNames={classNames}
      styles={styles}
      children={children}
      title={title}
      loading={loading}
      defaultExpanded={defaultExpanded}
      blink={blink}
      onExpand={onExpand}
    />
  );
};

export default ThinkComponentWrapper;
