'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { BubbleComponentWrapperProps } from './types';
import BubbleComponentComponent from './index';


/**
 * 组件逻辑: 气泡组件
 */
const BubbleComponentWrapper: React.FC<BubbleComponentWrapperProps> = (props) => {
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
  // 内部数据: 气泡位置(placement)
  const { placement } = props;
  // 内部数据: 加载状态(loading)
  const { loading } = props;
  // 内部数据: 气泡内容(content)
  const { content } = props;
  // 内部数据: 是否可编辑(editable)
  const { editable } = props;
  // 内部数据: 是否为流式传输(streaming)
  const { streaming } = props;
  // 内部数据: 打字动画效果(typing)
  const { typing } = props;
  // 内部数据: 头像插槽(avatar)
  const { avatar } = props;
  // 内部数据: 底部插槽(footer)
  const { footer } = props;
  // 内部数据: 头部插槽(header)
  const { header } = props;
  // 内部数据: 自定义输入(contentRender)
  const { contentRender } = props;
  // 内部数据: 样式(styles)
  const { styles } = props;

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

  const renderMarkdown = contentRender ?? ((content: string) => (
    <ReactMarkdown>{content}</ReactMarkdown>
  ));

  /*
   * [END OF YOUR CODE]
   */
  return (
    <BubbleComponentComponent
      placement={placement}
      loading={loading}
      content={content}
      editable={editable}
      streaming={streaming}
      typing={typing}
      avatar={avatar}
      footer={footer}
      header={header}
      contentRender={contentRender}
      styles={styles}
    />
  );
};

export default BubbleComponentWrapper;
