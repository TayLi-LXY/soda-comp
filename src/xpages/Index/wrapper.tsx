'use client';
import React, { useState } from 'react';
import type { IndexWrapperProps } from './types';
import IndexPage from './index';


/**
 * 组件逻辑: 落地页
 */
const IndexWrapper: React.FC<IndexWrapperProps> = () => {
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
  // 内部可变数据: 输入值(value)
  const [value, setValue] = useState<string | undefined>(undefined);
  // 内部可变数据: 占位符(placeholder)
  const [placeholder, setPlaceholder] = useState<string | undefined>(undefined);
  // 内部可变数据: 是否可用(disabled)
  const [disabled, setDisabled] = useState<boolean>(true);
  // 内部可变数据: 是否只读(readOnly)
  const [readOnly, setReadOnly] = useState<boolean>(false);
  // 内部可变数据: 加载(loading)
  const [loading, setLoading] = useState<boolean>(true);
  // 内部可变数据: 自动调整大小(autoSize)
  const [autoSize, setAutoSize] = useState<boolean | { minRows?: number; maxRows?: number }>({ minRows: 4, maxRows: 6 });
  // 内部可变数据: 接受(accept)
  const [accept, setAccept] = useState<string | string[] | undefined>(undefined);
  // 内部可变数据: 最大文件数(maxCount)
  const [maxCount, setMaxCount] = useState<number | undefined>(undefined);
  // 内部可变数据: 最大容量(maxSize)
  const [maxSize, setMaxSize] = useState<number | undefined>(undefined);

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
    <IndexPage 
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      setPlaceholder={setPlaceholder}
      disabled={disabled}
      setDisabled={setDisabled}
      readOnly={readOnly}
      setReadOnly={setReadOnly}
      loading={loading}
      setLoading={setLoading}
      autoSize={autoSize}
      setAutoSize={setAutoSize}
      accept={accept}
      setAccept={setAccept}
      maxCount={maxCount}
      setMaxCount={setMaxCount}
      maxSize={maxSize}
      setMaxSize={setMaxSize}
    />
  );
};

export default IndexWrapper;
