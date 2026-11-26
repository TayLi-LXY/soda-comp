'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { QueryResultDisplayComponentWrapperProps } from './types';
import { eventsSQLButton, eventsChartSwitchButton, onChatSummaryMessageInitializeResultDisplay, onInitializeMessageContentRelatedData } from './actions';
import type { Setter } from './setter';
import QueryResultDisplayComponentComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 查询结果展示组件
 */
const QueryResultDisplayComponentWrapper: React.FC<QueryResultDisplayComponentWrapperProps> = (props) => {
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
  // 内部可变数据: 消息ID(messageId)
  const [messageId, setMessageId] = useState<string | undefined>(undefined);
  // 内部可变数据: 是否流式(ifStream)
  const [ifStream, setIfStream] = useState<boolean>(true);
  // 内部可变数据: 消息内容(messageContent)
  const [messageContent, setMessageContent] = useState<string | undefined>(undefined);
  // 内部数据: 结果刷新信号(resultRefreshSignal)
  const { resultRefreshSignal } = props;
  // 可见控制数据: sql组件可见控制(sQLComponentVisibleControl)
  const [sQLComponentVisibleControl, setSQLComponentVisibleControl] = useState<boolean>(false);
  // 内部可变数据: 总结内容(summarizeContent)
  const [summarizeContent, setSummarizeContent] = useState<string | undefined>(undefined);
  // 可见控制数据: 图表组件可见控制(visibleControlOfChartComponent)
  const [visibleControlOfChartComponent, setVisibleControlOfChartComponent] = useState<boolean>(false);
  // 内部可变数据: 文件链接(fileUrl)
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);
  // 内部可变数据: 提示词列表(items)
  const [items, setItems] = useState<any[] | undefined>(undefined);
  const setter: Setter = useMemo(() => { return { setMessageId, setIfStream, setMessageContent, setSQLComponentVisibleControl, setSummarizeContent, setVisibleControlOfChartComponent, setFileUrl, setItems };}, []);
  const actions = {
    // 组件sQLButton事件响应触发的交互入口
    eventsSQLButton: useMemo(() => eventsSQLButton(setter, dispatch), [setter, dispatch]),
    // 组件chartSwitchButton事件响应触发的交互入口
    eventsChartSwitchButton: useMemo(() => eventsChartSwitchButton(setter, dispatch), [setter, dispatch]),
  };

  // 组件queryResult数据变化触发的交互入口：根据聊天总结消息初始化结果展示
  useEffect(() => onChatSummaryMessageInitializeResultDisplay(setter, dispatch, ifStream, messageId, messageContent, resultRefreshSignal), [setter, dispatch, ifStream, messageId, messageContent, resultRefreshSignal]);
  // 组件queryResult数据变化触发的交互入口：初始化消息内容相关数据
  useEffect(() => onInitializeMessageContentRelatedData(setter, dispatch, entity), [setter, dispatch, entity]);


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
    <QueryResultDisplayComponentComponent 
      entity={entity}
      messageId={messageId}
      setMessageId={setMessageId}
      ifStream={ifStream}
      setIfStream={setIfStream}
      messageContent={messageContent}
      setMessageContent={setMessageContent}
      resultRefreshSignal={resultRefreshSignal}
      sQLComponentVisibleControl={sQLComponentVisibleControl}
      setSQLComponentVisibleControl={setSQLComponentVisibleControl}
      summarizeContent={summarizeContent}
      setSummarizeContent={setSummarizeContent}
      visibleControlOfChartComponent={visibleControlOfChartComponent}
      setVisibleControlOfChartComponent={setVisibleControlOfChartComponent}
      fileUrl={fileUrl}
      setFileUrl={setFileUrl}
      items={items}
      setItems={setItems}
      actions={actions}
    />
  );
};

export default QueryResultDisplayComponentWrapper;
