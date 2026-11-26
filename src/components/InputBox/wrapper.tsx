'use client';
import React, { useMemo, useState } from 'react';
import type { InputBoxWrapperProps } from './types';
import { eventsFileUploadList, eventsInputArea, eventsSendMessageButton } from './actions';
import { useSelector } from 'react-redux';
import type { PageState } from '@/models/connect';
import type { Setter } from './setter';
import InputBoxComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 输入框
 */
const InputBoxWrapper: React.FC<InputBoxWrapperProps> = (props) => {
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
  // 内部数据: 可见控制信号数据(visibleControlSignalData)
  const visibleControlSignalData = useSelector((state: PageState) => state.Main.page.visibleControlSignalData);
  // 内部可变数据: 输入内容(inputContent)
  const [inputContent, setInputContent] = useState<string>("");
  // 内部可变数据: 选择的大模型(selectedllm)
  const [selectedllm, setSelectedllm] = useState<string | undefined>(undefined);
  // 内部数据: 对话ID(conversationId)
  const { conversationId } = props;
  // 内部数据: 用户对话ID(userConversationId)
  const { userConversationId } = props;
  // 内部数据: 登录用户(loggedinUser)
  const { loggedinUser } = props;
  // 列表控制数据: 用户上传文件列表(userUploadedFileList)
  const [userUploadedFileList, setUserUploadedFileList] = useState<any[]>([]);
  const setter: Setter = useMemo(() => { return { setInputContent, setSelectedllm, setUserUploadedFileList };}, []);
  const actions = {
    // 组件fileUploadList事件响应触发的交互入口
    eventsFileUploadList: useMemo(() => eventsFileUploadList(setter, dispatch, userUploadedFileList), [setter, dispatch, userUploadedFileList]),
    // 组件inputArea事件响应触发的交互入口
    eventsInputArea: useMemo(() => eventsInputArea(setter, dispatch), [setter, dispatch]),
    // 组件sendMessageButton事件响应触发的交互入口
    eventsSendMessageButton: useMemo(() => eventsSendMessageButton(setter, dispatch, selectedllm, userUploadedFileList, inputContent, conversationId, userConversationId, loggedinUser), [setter, dispatch, selectedllm, userUploadedFileList, inputContent, conversationId, userConversationId, loggedinUser]),
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
    <InputBoxComponent 
      visibleControlSignalData={visibleControlSignalData}
      inputContent={inputContent}
      setInputContent={setInputContent}
      selectedllm={selectedllm}
      setSelectedllm={setSelectedllm}
      conversationId={conversationId}
      userConversationId={userConversationId}
      loggedinUser={loggedinUser}
      userUploadedFileList={userUploadedFileList}
      setUserUploadedFileList={setUserUploadedFileList}
      actions={actions}
    />
  );
};

export default InputBoxWrapper;
