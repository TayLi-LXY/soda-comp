'use client';
import React from 'react';
import type { PromptsComponentWrapperProps } from './types';
import PromptsComponentComponent from './index';


/**
 * 组件逻辑: 提示集组件
 */
const PromptsComponentWrapper: React.FC<PromptsComponentWrapperProps> = (props) => {
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
  // 内部数据: 标题(title)
  const { title } = props;
  // 内部数据: 提示词列表(items)
  const { items } = props;
  // 内部数据: 单击事件(onItemClick)
  const { onItemClick } = props;
  // 内部数据: 自定义样式(styles)
  const { styles } = props;
  // 内部数据: 垂直(vertical)
  const { vertical } = props;
  // 内部数据: 换行(wrap)
  const { wrap } = props;
  // 内部数据: 渐入效果(fadeIn)
  const { fadeIn } = props;

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
    <PromptsComponentComponent 
      title={title}
      items={items}
      onItemClick={onItemClick}
      styles={styles}
      vertical={vertical}
      wrap={wrap}
      fadeIn={fadeIn}
    />
  );
};

export default PromptsComponentWrapper;
