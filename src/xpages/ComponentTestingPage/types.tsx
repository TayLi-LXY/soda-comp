
import type { GetProp } from 'antd';
import type { AttachmentsProps } from '@ant-design/x';

type AttachmentsItemType = GetProp<AttachmentsProps, 'items'>[number];

export type ComponentTestingPageWrapperProps =  {
};

export type ComponentTestingPageProps = {
  lang: string | undefined;
  setLang: (lang: string | undefined) => void;
  code: string | undefined;
  setCode: (code: string | undefined) => void;
  name: string | undefined;
  setName: (name: string | undefined) => void;
  byte: string | undefined;
  setByte: (byte: string | undefined) => void;
  description: React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode);
  setDescription: (description: React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode)) => void;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
  editable: boolean;
  setEditable: (editable: boolean) => void;
  typing: boolean;
  setTyping: (typing: boolean) => void;
  avatar: React.ReactNode;
  setAvatar: (avatar: React.ReactNode) => void;
  footer: React.ReactNode;
  setFooter: (footer: React.ReactNode) => void;
  header: React.ReactNode;
  setHeader: (header: React.ReactNode) => void;
  treeData: any[];
  setTreeData: (treeData: any[]) => void;
  selectable: boolean;
  setSelectable: (selectable: boolean) => void;
  emptyRender: false | React.ReactNode | (() => React.ReactNode);
  setEmptyRender: (emptyRender: false | React.ReactNode | (() => React.ReactNode)) => void;
  placement: string | undefined;
  setPlacement: (placement: string | undefined) => void;
  loading: boolean | React.ReactNode | undefined;
  setLoading: (loading: boolean | React.ReactNode | undefined) => void;
  streaming: boolean;
  setStreaming: (streaming: boolean) => void;
  classNames: Record<string, string> | undefined;
  setClassNames: (classNames: Record<string, string> | undefined) => void;
  styles: Record<string, React.CSSProperties> | undefined;
  setStyles: (styles: Record<string, React.CSSProperties> | undefined) => void;
  children: React.ReactNode | undefined;
  setChildren: (children: React.ReactNode | undefined) => void;
  title: React.ReactNode;
  setTitle: (title: React.ReactNode) => void;
  defaultExpanded: boolean;
  setDefaultExpanded: (defaultExpanded: boolean) => void;
  blink: boolean;
  setBlink: (blink: boolean) => void;
  onExpand: ((expand: boolean) => void) | undefined;
  setOnExpand: (onExpand: ((expand: boolean) => void) | undefined) => void;
  inputBoxValue: string | undefined;
  setInputBoxValue: (value: string | undefined) => void;
  attachmentsItems: AttachmentsItemType[];
  onAttachmentsChange: (items: AttachmentsItemType[]) => void;
  onSubmit: (value: string, attachments: AttachmentsItemType[]) => void;
};
