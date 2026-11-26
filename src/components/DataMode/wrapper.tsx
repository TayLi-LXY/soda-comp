'use client';
import React, { useMemo, useRef } from 'react';
import type { DataModeWrapperProps } from './types';
import DataModeComponent from './index';

import {
  VisualCanvasConfig,
  VisualElementConfig,
  VisualLinkConfig,
  VisualToolbarConfig,
} from '@horsecoder/visual-core';

import StandardModelEntityWrapper from '../StandardModelEntity/wrapper';
import StandardModelLinkWrapper from '../StandardModelLink/wrapper';


/**
 * 组件逻辑: 数据模型
 */
const DataModeWrapper: React.FC<DataModeWrapperProps> = () => {
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


  const diagramRef = useRef<any>(null);

  const toolbarConfig: VisualToolbarConfig = useMemo(
    () => ([{
      id: 'plus',
      onClick: () => {},
      icon: 'plus',
      tips: '新增',
    }]), []
  );


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
    <DataModeComponent 
      diagramRef={diagramRef}
      canvasConfig={canvasConfig}
      toolbarConfig={toolbarConfig}
      // actions={actions}
      />
  );
};

export default DataModeWrapper;
