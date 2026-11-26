'use client';
import React, { useMemo, useEffect, useRef, useState } from 'react';
import type { PanelWrapperProps } from './types';
import { onDetermineDisplayComponentBasedOnActiveSubPanels, onMonitorChangesInDialogueDataStructure } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import type { ComponentState } from '@/models/connect';
import type { Setter } from './setter';
import PanelComponent from './index';
import { setView } from '../ModelCanvas/handler/diagramHandler';


/**
 * 组件逻辑: 面板
 */
const PanelWrapper: React.FC<PanelWrapperProps> = () => {
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
  // 全局数据: 活跃子面板(activeSubpanel)
  const activeSubpanel = useSelector((state: ComponentState) => state.Panel.component.activeSubpanel);
  // 内部数据: diagramRefInner(diagramRef)
  const diagramRef = useRef<any>(null);
  // 内部数据: 工具栏配置(toolbarConfig)
  const toolbarConfig: VisualToolbarConfig = useMemo(() => [], []);
  // 内部数据: 对话数据模式列表(dialogueDataSchemaList)
  const dialogueDataSchemaList = useSelector((state: ComponentState) => state.Dialogue.component.dialogueDataSchemaList);
  // 可见控制数据: 画布可见(canvasVisible)
  const [canvasVisible, setCanvasVisible] = useState<boolean>(false);
  // 内部数据: 选中的schema预览Url(previewUrlOfSelectedSchema)
  const previewUrlOfSelectedSchema = useSelector((state: ComponentState) => state.Dialogue.component.previewUrlOfSelectedSchema);
  // 可见控制数据: 表可视化可见(tableVisualizationVisible)
  const [tableVisualizationVisible, setTableVisualizationVisible] = useState<boolean>(false);
  // 可见控制数据: 协作流程可见(collaborativeFlowVisible)
  const [collaborativeFlowVisible, setCollaborativeFlowVisible] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setCanvasVisible, setTableVisualizationVisible, setCollaborativeFlowVisible };}, []);

  // 组件panelContainer数据变化触发的交互入口：根据活跃子面板决定展示组件
  useEffect(() => onDetermineDisplayComponentBasedOnActiveSubPanels(setter, dispatch, activeSubpanel), [setter, dispatch, activeSubpanel]);
  // 组件modelCanvas数据变化触发的交互入口：监听对话数据结构变化
  useEffect(() => onMonitorChangesInDialogueDataStructure(setter, dispatch, diagramRef, previewUrlOfSelectedSchema), [setter, dispatch, diagramRef, previewUrlOfSelectedSchema]);


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

  if(diagramRef.current) {
    setView(diagramRef, {
      
      "id": "horsecoder",
      "elements": [
          {
              "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
              "name": "飞特六轴臂",
              "type": "model",
              "color": "#73d13d",
              "x": 508.0092544555664,
              "y": 330.0092544555664,
              "select": false,
              "locked": false,
              "pendant": {
                  "data": {
                      "type": "model",
                      "detail": {
                          "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
                          "model": {
                              "module": "sys",
                              "modelTitle": "飞特六轴臂",
                              "name": "feetechSixAxisArm",
                              "ifOpen": 0,
                              "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
                              "pk": [
                                  "id"
                              ],
                              "fields": [
                                  {
                                      "notes": "飞特六轴臂ID",
                                      "name": "id",
                                      "length": "32",
                                      "type": "String",
                                      "fieldTitle": "飞特六轴臂ID"
                                  },
                                  {
                                      "notes": "名称",
                                      "editable": true,
                                      "notnull": false,
                                      "name": "name",
                                      "length": "32",
                                      "fieldTitle": "名称",
                                      "type": "String",
                                      "filterTypes": [
                                          "equal"
                                      ]
                                  },
                                  {
                                      "notes": "端口",
                                      "editable": true,
                                      "notnull": false,
                                      "name": "port",
                                      "length": "32",
                                      "fieldTitle": "端口",
                                      "type": "String",
                                      "filterTypes": [
                                          "equal"
                                      ]
                                  },
                                  {
                                      "notes": "更新时间",
                                      "editable": false,
                                      "defaultValue": "current_timestamp()",
                                      "notnull": true,
                                      "extra": "ON UPDATE current_timestamp()",
                                      "name": "gmtUpdate",
                                      "length": "0",
                                      "type": "DateTime",
                                      "fieldTitle": "更新时间",
                                      "filterTypes": [
                                          "between"
                                      ]
                                  },
                                  {
                                      "notes": "创建时间",
                                      "editable": false,
                                      "defaultValue": "current_timestamp()",
                                      "notnull": true,
                                      "name": "gmtCreate",
                                      "length": "0",
                                      "type": "DateTime",
                                      "fieldTitle": "创建时间",
                                      "filterTypes": [
                                          "between"
                                      ]
                                  }
                              ],
                              "order": "gmtCreate desc"
                          },
                          "component": {
                              "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
                              "modelId": "@net.sosn.robotic.arm/feetechSixAxisArm",
                              "isCollapse": false,
                              "x": 508.0092544555664,
                              "y": 330.0092544555664
                          },
                          "fields": [
                              {
                                  "field": {
                                      "notes": "飞特六轴臂ID",
                                      "name": "id",
                                      "length": "32",
                                      "type": "String",
                                      "fieldTitle": "飞特六轴臂ID"
                                  }
                              },
                              {
                                  "field": {
                                      "notes": "名称",
                                      "editable": true,
                                      "notnull": false,
                                      "name": "name",
                                      "length": "32",
                                      "fieldTitle": "名称",
                                      "type": "String",
                                      "filterTypes": [
                                          "equal"
                                      ]
                                  }
                              },
                              {
                                  "field": {
                                      "notes": "端口",
                                      "editable": true,
                                      "notnull": false,
                                      "name": "port",
                                      "length": "32",
                                      "fieldTitle": "端口",
                                      "type": "String",
                                      "filterTypes": [
                                          "equal"
                                      ]
                                  }
                              },
                              {
                                  "field": {
                                      "notes": "更新时间",
                                      "editable": false,
                                      "defaultValue": "current_timestamp()",
                                      "notnull": true,
                                      "extra": "ON UPDATE current_timestamp()",
                                      "name": "gmtUpdate",
                                      "length": "0",
                                      "type": "DateTime",
                                      "fieldTitle": "更新时间",
                                      "filterTypes": [
                                          "between"
                                      ]
                                  }
                              },
                              {
                                  "field": {
                                      "notes": "创建时间",
                                      "editable": false,
                                      "defaultValue": "current_timestamp()",
                                      "notnull": true,
                                      "name": "gmtCreate",
                                      "length": "0",
                                      "type": "DateTime",
                                      "fieldTitle": "创建时间",
                                      "filterTypes": [
                                          "between"
                                      ]
                                  }
                              }
                          ],
                          "familyId": "net.sosn.robotic.arm",
                          "thirdParty": false,
                          "size": {
                              "width": 125,
                              "height": 75
                          }
                      }
                  }
              }
          }
      ],
      "links": []
  })};

  /*
   * [END OF YOUR CODE]
   */
  return (
    <PanelComponent 
      activeSubpanel={activeSubpanel}
      diagramRef={diagramRef}
      toolbarConfig={toolbarConfig}
      dialogueDataSchemaList={dialogueDataSchemaList}
      canvasVisible={canvasVisible}
      setCanvasVisible={setCanvasVisible}
      previewUrlOfSelectedSchema={previewUrlOfSelectedSchema}
      tableVisualizationVisible={tableVisualizationVisible}
      setTableVisualizationVisible={setTableVisualizationVisible}
      collaborativeFlowVisible={collaborativeFlowVisible}
      setCollaborativeFlowVisible={setCollaborativeFlowVisible}
    />
  );
};

export default PanelWrapper;
