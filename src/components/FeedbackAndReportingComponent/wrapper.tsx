'use client';
import React from 'react';
import type { FeedbackAndReportingComponentWrapperProps } from './types';
import { Form } from 'antd';
import FeedbackAndReportingComponentComponent from './index';


/**
 * 组件逻辑: 反馈与举报组件
 */
const FeedbackAndReportingComponentWrapper: React.FC<FeedbackAndReportingComponentWrapperProps> = () => {
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
  // 内部数据: 反馈表单(feedbackForm)
  const [feedbackForm] = Form.useForm();

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
    <FeedbackAndReportingComponentComponent 
      feedbackForm={feedbackForm}
    />
  );
};

export default FeedbackAndReportingComponentWrapper;
