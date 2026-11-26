'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { SendSingleAttachmentInformationWrapperProps } from './types';
import { eventsSendAttachmentList, onInitializeSendingAttachmentList } from './actions';
import type { DialogueTaskFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueTaskFile';
import type { Setter } from './setter';
import SendSingleAttachmentInformationComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 发送信息单项附件
 */
const SendSingleAttachmentInformationWrapper: React.FC<SendSingleAttachmentInformationWrapperProps> = (props) => {
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
  // 内部数据: 聊天记录列表控制单项(entity)
  const { entity } = props;
  // 列表控制数据: 发送消息文件卡片列表(sendMessageFileCardList)
  const [sendMessageFileCardList, setSendMessageFileCardList] = useState<any[]>([]);
  // 可见控制数据: 上传文件摘要可见控制(uploadFileSummaryVisibleControl)
  const [uploadFileSummaryVisibleControl, setUploadFileSummaryVisibleControl] = useState<boolean>(false);
  // 内部可变数据: 文件(file)
  const [file, setFile] = useState<DialogueTaskFile | undefined>(undefined);
  const setter: Setter = useMemo(() => { return { setSendMessageFileCardList, setUploadFileSummaryVisibleControl, setFile };}, []);
  const actions = {
    // 组件sendAttachmentList事件响应触发的交互入口
    eventsSendAttachmentList: useMemo(() => eventsSendAttachmentList(setter, dispatch, sendMessageFileCardList), [setter, dispatch, sendMessageFileCardList]),
  };

  // 组件sendAttachments数据变化触发的交互入口：初始化发送附件列表
  useEffect(() => onInitializeSendingAttachmentList(setter, dispatch, entity), [setter, dispatch, entity]);


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
    <SendSingleAttachmentInformationComponent 
      entity={entity}
      sendMessageFileCardList={sendMessageFileCardList}
      setSendMessageFileCardList={setSendMessageFileCardList}
      uploadFileSummaryVisibleControl={uploadFileSummaryVisibleControl}
      setUploadFileSummaryVisibleControl={setUploadFileSummaryVisibleControl}
      file={file}
      setFile={setFile}
      actions={actions}
    />
  );
};

export default SendSingleAttachmentInformationWrapper;
