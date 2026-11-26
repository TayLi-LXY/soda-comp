'use client';
import React, { useState } from 'react';
import type { ComponentTestingPageWrapperProps } from './types';
import ComponentTestingPagePage from './index';


/**
 * 组件逻辑: 组件测试页面
 */
const ComponentTestingPageWrapper: React.FC<ComponentTestingPageWrapperProps> = () => {
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
  // 内部可变数据: 语言(lang)
  // const [lang, setLang] = useState<string | undefined>(undefined);
  // // 内部可变数据: code(code)
  // const [code, setCode] = useState<string | undefined>(undefined);
  // // 内部可变数据: 名称(name)
  // const [name, setName] = useState<string | undefined>(undefined);
  // // 内部可变数据: 文件大小(byte)
  // const [byte, setByte] = useState<string | undefined>(undefined);
  // // 内部可变数据: 描述(description)
  // const [description, setDescription] = useState<React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode)>(undefined);
  // // 内部可变数据: 气泡内容(content)
  // const [content, setContent] = useState<React.ReactNode>(undefined);
  // // 内部可变数据: 是否可编辑(editable)
  // const [editable, setEditable] = useState<boolean>(undefined);
  // // 内部可变数据: 打字动画效果(typing)
  // const [typing, setTyping] = useState<boolean>(undefined);
  // // 内部可变数据: 头像插槽(avatar)
  // const [avatar, setAvatar] = useState<React.ReactNode>(undefined);
  // // 内部可变数据: 底部插槽(footer)
  // const [footer, setFooter] = useState<React.ReactNode>(undefined);
  // // 内部可变数据: 头部插槽(header)
  // const [header, setHeader] = useState<React.ReactNode>(undefined);
  // // 内部数据: 文件树数据(treeData)
  // const [treeData, setTreeData] = useState<any[]>(undefined);
  // // 内部数据: 是否开启选择功能(selectable)
  // const [selectable, setSelectable] = useState<boolean>(undefined);
  // // 内部数据: 空状态时的展示内容(emptyRender)
  // const [emptyRender, setEmptyRender] = useState<false | React.ReactNode | (() => React.ReactNode)>(undefined);
  // // 内部可变数据: 输入框值(inputBoxValue)
  // const [inputBoxValue, setInputBoxValue] = useState<string | undefined>(undefined);
  // // 内部可变数据: 附件列表(attachmentsItems)
  // const [attachmentsItems, setAttachmentsItems] = useState<any[]>(undefined);

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
  const [lang, setLang] = useState<string | undefined>('typescript');
  const [code, setCode] = useState<string | undefined>(`const greet = (name: string) => {
  return \`Hello, \${name}!\`;
};

console.log(greet("World"));`);
  const [name, setName] = useState<string | undefined>('需求文档.pdf');
  const [byte, setByte] = useState<string | undefined>('2.4MB');
  const [description, setDescription] = useState<React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode)>('需求文档，请查阅');

  const [content, setContent] = useState<React.ReactNode>('这是一段气泡卡片的测试内容，用来验证气泡组件的显示效果。');
  const [editable, setEditable] = useState<boolean>(false);
  const [typing, setTyping] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<React.ReactNode>(undefined);
  const [footer, setFooter] = useState<React.ReactNode>(undefined);
  const [header, setHeader] = useState<React.ReactNode>(undefined);

  const [treeData, setTreeData] = useState<any[]>([
    { path: '0', title: '我的文档', children: [
      { path: '0-0', title: '需求文档.pdf' },
      { path: '0-1', title: '设计稿.png' },
    ]},
    { path: '1', title: '图片', children: [
      { path: '1-0', title: '截图1.png' },
    ]},
  ]);
  const [selectable, setSelectable] = useState<boolean>(true);
  const [emptyRender, setEmptyRender] = useState<false | React.ReactNode | (() => React.ReactNode)>(false);

  const [placement, setPlacement] = useState<string | undefined>('end');
  const [loading, setLoading] = useState<boolean | React.ReactNode | undefined>(false);
  const [streaming, setStreaming] = useState<boolean>(false);
  const [classNames, setClassNames] = useState<Record<string, string> | undefined>(undefined);
  const [styles, setStyles] = useState<Record<string, React.CSSProperties> | undefined>(undefined);
  const [children, setChildren] = useState<React.ReactNode | undefined>(`首先分析用户需求，确定需要实现的功能模块。
然后设计数据结构，选择合适的存储方案。
接着编写核心逻辑代码，包括数据处理和状态管理。
最后进行单元测试，确保功能正确性。`);
  const [title, setTitle] = useState<React.ReactNode>('深度思考');
  const [defaultExpanded, setDefaultExpanded] = useState<boolean>(true);
  const [blink, setBlink] = useState<boolean>(true);
  const [onExpand, setOnExpand] = useState<((expand: boolean) => void) | undefined>(undefined);

  // 拖拽附件输入框: 输入值
  const [inputBoxValue, setInputBoxValue] = useState<string | undefined>(undefined);
  // 拖拽附件输入框: 附件列表
  const [attachmentsItems, setAttachmentsItems] = useState<any[]>([]);
  // 拖拽附件输入框: 提交回调
  const handleAttachmentSubmit = (value: string, attachments: any[]) => {
    console.log('提交:', value, attachments);
  };

  /*
   * [END OF YOUR CODE]
   */
  return (
    <ComponentTestingPagePage
      lang={lang}
      setLang={setLang}
      code={code}
      setCode={setCode}
      name={name}
      setName={setName}
      byte={byte}
      setByte={setByte}
      description={description}
      setDescription={setDescription}
      content={content}
      setContent={setContent}
      editable={editable}
      setEditable={setEditable}
      typing={typing}
      setTyping={setTyping}
      avatar={avatar}
      setAvatar={setAvatar}
      footer={footer}
      setFooter={setFooter}
      header={header}
      setHeader={setHeader}
      treeData={treeData}
      setTreeData={setTreeData}
      selectable={selectable}
      setSelectable={setSelectable}
      emptyRender={emptyRender}
      setEmptyRender={setEmptyRender}
      placement={placement}
      setPlacement={setPlacement}
      loading={loading}
      setLoading={setLoading}
      streaming={streaming}
      setStreaming={setStreaming}
      classNames={classNames}
      setClassNames={setClassNames}
      styles={styles}
      setStyles={setStyles}
      children={children}
      setChildren={setChildren}
      title={title}
      setTitle={setTitle}
      defaultExpanded={defaultExpanded}
      setDefaultExpanded={setDefaultExpanded}
      blink={blink}
      setBlink={setBlink}
      onExpand={onExpand}
      setOnExpand={setOnExpand}
      inputBoxValue={inputBoxValue}
      setInputBoxValue={setInputBoxValue}
      attachmentsItems={attachmentsItems}
      onAttachmentsChange={setAttachmentsItems}
      onSubmit={handleAttachmentSubmit}
    />
  );
};

export default ComponentTestingPageWrapper;
