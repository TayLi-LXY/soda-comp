'use client';
import React, { useMemo } from 'react';
import type { DisplayCardItemsAfterFileUploadWrapperProps } from './types';
import { eventsDeleteFileButton } from './actions';
import DisplayCardItemsAfterFileUploadComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 文件上传后展示卡片单项
 */
const DisplayCardItemsAfterFileUploadWrapper: React.FC<DisplayCardItemsAfterFileUploadWrapperProps> = (props) => {
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
  // 内部数据: 用户上传文件列表单项(entity)
  const { entity } = props;
  // 内部数据: 索引(index)
  const { index } = props;
  // 内部数据: 删除文件回调(deleteFileCallback)
  const { deleteFileCallback } = props;
  const actions = {
    // 组件deleteFileButton事件响应触发的交互入口
    eventsDeleteFileButton: useMemo(() => eventsDeleteFileButton(dispatch, index, deleteFileCallback), [dispatch, index, deleteFileCallback]),
  };

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
    <DisplayCardItemsAfterFileUploadComponent 
      entity={entity}
      index={index}
      deleteFileCallback={deleteFileCallback}
      actions={actions}
    />
  );
};

export default DisplayCardItemsAfterFileUploadWrapper;
