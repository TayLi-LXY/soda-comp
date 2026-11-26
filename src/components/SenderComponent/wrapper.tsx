'use client';
import React from 'react';
import type { SenderComponentWrapperProps } from './types';
import SenderComponentComponent from './index';


/**
 * 组件逻辑: 输入框组件
 */
const SenderComponentWrapper: React.FC<SenderComponentWrapperProps> = (props) => {
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
  // 内部数据: 是否允许语音输入(allowSpeech)
  const { allowSpeech } = props;
  // 内部数据: 样式类名(classNames)
  const { classNames } = props;
  // 内部数据: 自定义组件(components)
  const { components } = props;
  // 内部数据: 输入框默认值(defaultValue)
  const { defaultValue } = props;
  // 内部数据: 是否禁用(disabled)
  const { disabled } = props;
  // 内部数据: 是否加载中(loading)
  const { loading } = props;
  // 内部数据: 后缀内容(suffix)
  const { suffix } = props;
  // 内部数据: 头部面板(header)
  const { header } = props;
  // 内部数据: 前缀内容(prefix)
  const { prefix } = props;
  // 内部数据: 底部内容(footer)
  const { footer } = props;
  // 内部数据: 是否让输入框只读(readOnly)
  const { readOnly } = props;
  // 内部数据: 根元素样式类(rootClassName)
  const { rootClassName } = props;
  // 内部数据: 提交模式(submitType)
  const { submitType } = props;
  // 内部数据: 输入框值(value)
  const { value } = props;
  // 内部数据: 点击发送按钮的回调(onSubmit)
  const { onSubmit } = props;
  // 内部数据: 输入框值改变的回调(onChange)
  const { onChange } = props;
  // 内部数据: 点击取消按钮的回调(onCancel)
  const { onCancel } = props;
  // 内部数据: 粘贴回调(onPaste)
  const { onPaste } = props;
  // 内部数据: 黏贴文件的回调(onPasteFile)
  const { onPasteFile } = props;
  // 内部数据: 键盘按下回调(onKeyDown)
  const { onKeyDown } = props;
  // 内部数据: 获取焦点回调(onFocus)
  const { onFocus } = props;
  // 内部数据: 失去焦点回调(onBlur)
  const { onBlur } = props;
  // 内部数据: 输入框占位符(placeholder)
  const { placeholder } = props;
  // 内部数据: 自适应内容高度(autoSize)
  const { autoSize } = props;
  // 内部数据: 词槽配置(slotConfig)
  const { slotConfig } = props;
  // 内部数据: 技能配置(skill)
  const { skill } = props;

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
    <SenderComponentComponent 
      allowSpeech={allowSpeech}
      classNames={classNames}
      components={components}
      defaultValue={defaultValue}
      disabled={disabled}
      loading={loading}
      suffix={suffix}
      header={header}
      prefix={prefix}
      footer={footer}
      readOnly={readOnly}
      rootClassName={rootClassName}
      submitType={submitType}
      value={value}
      onSubmit={onSubmit}
      onChange={onChange}
      onCancel={onCancel}
      onPaste={onPaste}
      onPasteFile={onPasteFile}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      autoSize={autoSize}
      slotConfig={slotConfig}
      skill={skill}
    />
  );
};

export default SenderComponentWrapper;
