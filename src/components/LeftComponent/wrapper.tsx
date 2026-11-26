'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { LeftComponentWrapperProps } from './types';
import { eventsLeftComponentDiv0Div0Div1, eventsAddNewConversation, eventsCollapseSidebarButton, eventsLeftComponentDiv1Div1Div1Div1Div0, eventsUserInformationContainer, eventsDiscountActivityButton, onAutomaticallyCreateASessionUponFirstLogin, onDetermineWhetherItAnAddConversation, onInitializeUserDialogueCardList, onInitializeSettingsPanelBubbleCard } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import type { LayoutState, ComponentState } from '@/models/connect';
import { useSearchParams } from 'next/navigation';
import type { Setter } from './setter';
import LeftComponentComponent from './index';


/**
 * 组件逻辑: 左侧组件
 */
const LeftComponentWrapper: React.FC<LeftComponentWrapperProps> = () => {
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
  // 内部数据: 登录用户(loggedinUser)
  const loggedinUser = useSelector((state: LayoutState) => state.EmptyLayout.layout.loggedinUser);
  // 内部数据: IM会话ID(conversationId)
  const searchParams = useSearchParams();
  const conversationId = searchParams.get('id') ?? "";
  // 内部可变数据: 是否首次登录无会话(ifFirstLogWithoutConversation)
  const [ifFirstLogWithoutConversation, setIfFirstLogWithoutConversation] = useState<boolean>(false);
  // 内部数据: 会员类型(memberType)
  const memberType = useSelector((state: LayoutState) => state.EmptyLayout.layout.memberType);
  // 可见控制数据: 左侧边栏收起可见控制(foldingUpVisibleControlsOnLeftSidebar)
  const [foldingUpVisibleControlsOnLeftSidebar, setFoldingUpVisibleControlsOnLeftSidebar] = useState<boolean>(false);
  // 可见控制数据: 创建群聊侧边可见控制(createGroupChatWithVisibleControlsOnSide)
  const [createGroupChatWithVisibleControlsOnSide, setCreateGroupChatWithVisibleControlsOnSide] = useState<boolean>(false);
  // 可见控制数据: 邀请成员侧边可见控制(inviteMembersWithVisibleControlsOnSide)
  const [inviteMembersWithVisibleControlsOnSide, setInviteMembersWithVisibleControlsOnSide] = useState<boolean>(false);
  // 可见控制数据: 收起设置可见(collapseSettingsVisible)
  const [collapseSettingsVisible, setCollapseSettingsVisible] = useState<boolean>(false);
  // 可见控制数据: 左侧边栏展开可见控制(expandVisibleControlsOnLeftSidebar)
  const [expandVisibleControlsOnLeftSidebar, setExpandVisibleControlsOnLeftSidebar] = useState<boolean>(true);
  // 可见控制数据: 邀请成员可见控制(inviteMembersVisibleControl)
  const [inviteMembersVisibleControl, setInviteMembersVisibleControl] = useState<boolean>(false);
  // 列表控制数据: 对话卡片列表(dialogueCardList)
  const [dialogueCardList, setDialogueCardList] = useState<any[]>([]);
  // 全局数据: 对话列表刷新信号(dialogueListRefreshSignal)
  const dialogueListRefreshSignal = useSelector((state: ComponentState) => state.LeftComponent.component.dialogueListRefreshSignal);
  // 内部可变数据: 气泡内容(popoverContent)
  const [popoverContent, setPopoverContent] = useState<React.ReactNode>([]);
  // 全局数据: 设置面板可见控制(setPanelVisibleControls)
  const setPanelVisibleControls = useSelector((state: ComponentState) => state.LeftComponent.component.setPanelVisibleControls);
  const setter: Setter = useMemo(() => { return { setIfFirstLogWithoutConversation, setFoldingUpVisibleControlsOnLeftSidebar, setCreateGroupChatWithVisibleControlsOnSide, setInviteMembersWithVisibleControlsOnSide, setCollapseSettingsVisible, setExpandVisibleControlsOnLeftSidebar, setInviteMembersVisibleControl, setDialogueCardList, setPopoverContent };}, []);
  const actions = {
    // 组件leftComponentDiv0Div0Div1事件响应触发的交互入口
    eventsLeftComponentDiv0Div0Div1: useMemo(() => eventsLeftComponentDiv0Div0Div1(setter, dispatch), [setter, dispatch]),
    // 组件addNewConversation事件响应触发的交互入口
    eventsAddNewConversation: useMemo(() => eventsAddNewConversation(setter, dispatch, loggedinUser), [setter, dispatch, loggedinUser]),
    // 组件collapseSidebarButton事件响应触发的交互入口
    eventsCollapseSidebarButton: useMemo(() => eventsCollapseSidebarButton(setter, dispatch), [setter, dispatch]),
    // 组件leftComponentDiv1Div1Div1Div1Div0事件响应触发的交互入口
    eventsLeftComponentDiv1Div1Div1Div1Div0: useMemo(() => eventsLeftComponentDiv1Div1Div1Div1Div0(setter, dispatch, dialogueCardList), [setter, dispatch, dialogueCardList]),
    // 组件userInformationContainer事件响应触发的交互入口
    eventsUserInformationContainer: useMemo(() => eventsUserInformationContainer(setter, dispatch, setPanelVisibleControls), [setter, dispatch, setPanelVisibleControls]),
    // 组件discountActivityButton事件响应触发的交互入口
    eventsDiscountActivityButton: useMemo(() => eventsDiscountActivityButton(setter, dispatch, loggedinUser, memberType), [setter, dispatch, loggedinUser, memberType]),
  };

  // 组件leftComponent数据变化触发的交互入口：首次登录自动创建会话
  useEffect(() => onAutomaticallyCreateASessionUponFirstLogin(setter, dispatch, ifFirstLogWithoutConversation, loggedinUser), [setter, dispatch, ifFirstLogWithoutConversation, loggedinUser]);
  // 组件leftComponentDiv1数据变化触发的交互入口：判断是否为新增对话
  useEffect(() => onDetermineWhetherItAnAddConversation(setter, dispatch), [setter, dispatch]);
  // 组件leftComponentDiv1Div1Div1Div1Div0数据变化触发的交互入口：初始化用户对话卡片列表
  useEffect(() => onInitializeUserDialogueCardList(setter, dispatch, conversationId, loggedinUser, dialogueListRefreshSignal), [setter, dispatch, conversationId, loggedinUser, dialogueListRefreshSignal]);
  // 组件setPanelBubbleCard数据变化触发的交互入口：初始化设置面板气泡卡片
  useEffect(() => onInitializeSettingsPanelBubbleCard(setter, dispatch), [setter, dispatch]);


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
    <LeftComponentComponent 
      loggedinUser={loggedinUser}
      conversationId={conversationId}
      ifFirstLogWithoutConversation={ifFirstLogWithoutConversation}
      setIfFirstLogWithoutConversation={setIfFirstLogWithoutConversation}
      memberType={memberType}
      foldingUpVisibleControlsOnLeftSidebar={foldingUpVisibleControlsOnLeftSidebar}
      setFoldingUpVisibleControlsOnLeftSidebar={setFoldingUpVisibleControlsOnLeftSidebar}
      createGroupChatWithVisibleControlsOnSide={createGroupChatWithVisibleControlsOnSide}
      setCreateGroupChatWithVisibleControlsOnSide={setCreateGroupChatWithVisibleControlsOnSide}
      inviteMembersWithVisibleControlsOnSide={inviteMembersWithVisibleControlsOnSide}
      setInviteMembersWithVisibleControlsOnSide={setInviteMembersWithVisibleControlsOnSide}
      collapseSettingsVisible={collapseSettingsVisible}
      setCollapseSettingsVisible={setCollapseSettingsVisible}
      expandVisibleControlsOnLeftSidebar={expandVisibleControlsOnLeftSidebar}
      setExpandVisibleControlsOnLeftSidebar={setExpandVisibleControlsOnLeftSidebar}
      inviteMembersVisibleControl={inviteMembersVisibleControl}
      setInviteMembersVisibleControl={setInviteMembersVisibleControl}
      dialogueCardList={dialogueCardList}
      setDialogueCardList={setDialogueCardList}
      dialogueListRefreshSignal={dialogueListRefreshSignal}
      popoverContent={popoverContent}
      setPopoverContent={setPopoverContent}
      setPanelVisibleControls={setPanelVisibleControls}
      actions={actions}
    />
  );
};

export default LeftComponentWrapper;
