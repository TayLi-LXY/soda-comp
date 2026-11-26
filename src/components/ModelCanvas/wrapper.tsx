'use client';
import React, { useMemo } from 'react';
import type { ModelCanvasWrapperProps } from './types';
import { eventsDiv } from './actions';
// import { VisualCanvasConfig } from '@horsecoder/visual-core';
import ModelCanvasComponent from './index';

import {
  VisualCanvasConfig,
  VisualElementConfig,
  VisualLinkConfig,
} from '@horsecoder/visual-core';
import StandardModelEntityWrapper from '../StandardModelEntity/wrapper';
import StandardModelLinkWrapper from '../StandardModelLink/wrapper';

/**
 * 组件逻辑: 模型画布
 */
const ModelCanvasWrapper: React.FC<ModelCanvasWrapperProps> = (props) => {
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
  // 内部数据: diagramRefProps(diagramRef)
  const { diagramRef } = props;
  // 内部数据: 画布配置(canvasConfig)
  // const canvasConfig: VisualCanvasConfig = useMemo(
  //   () => ({}),
  //   [],
  // );
  // 内部数据: 内部工具栏配置(toolbarConfig)
  const { toolbarConfig } = props;
  const actions = {
    // 组件div事件响应触发的交互入口
    eventsDiv: useMemo(() => eventsDiv(), []),
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

    const elementConfig: VisualElementConfig = useMemo(
    () => ({
      components: {
        model: {
          component: StandardModelEntityWrapper,
          minSize: {
            width: 162,
            height: 65,
          },
        },
      },
    }),
    [],
  );

  const linkConfig: VisualLinkConfig = useMemo(
    () => ({
      components: {
        relation: {
          component: StandardModelLinkWrapper,
          hasArrow: true,
          showName: true,
        },
      },
    }),
    [],
  );

    const canvasConfig: VisualCanvasConfig = useMemo(
    () => ({
      toolbarConfig,
      elementConfig,
      linkConfig,
      globalConfig: {
        gridSize: 25,
      },
    }),
    [toolbarConfig, elementConfig, linkConfig],
  );

  /*
   * [END OF YOUR CODE]
   */
  return (
    <ModelCanvasComponent 
      diagramRef={diagramRef}
      canvasConfig={canvasConfig}
      toolbarConfig={toolbarConfig}
      actions={actions}
    />
  );
};

export default ModelCanvasWrapper;
