'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { SummaryOfAttachmentsForSendingInformationItemsWrapperProps } from './types';
import { onGenerateAContentSummaryBasedOnFile } from './actions';
import type { Setter } from './setter';
import SummaryOfAttachmentsForSendingInformationItemsComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 发送信息单项附件摘要
 */
const SummaryOfAttachmentsForSendingInformationItemsWrapper: React.FC<SummaryOfAttachmentsForSendingInformationItemsWrapperProps> = (props) => {
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
  // 内部可变数据: 摘要内容(summaryContent)
  const [summaryContent, setSummaryContent] = useState<string | undefined>(undefined);
  // 内部数据: 文件(file)
  const { file } = props;
  const setter: Setter = useMemo(() => { return { setSummaryContent };}, []);

  // 组件sendAttachmentSummary数据变化触发的交互入口：根据文件生成内容摘要
  useEffect(() => onGenerateAContentSummaryBasedOnFile(setter, dispatch, file), [setter, dispatch, file]);


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
    <SummaryOfAttachmentsForSendingInformationItemsComponent 
      summaryContent={summaryContent}
      setSummaryContent={setSummaryContent}
      file={file}
    />
  );
};

export default SummaryOfAttachmentsForSendingInformationItemsWrapper;
