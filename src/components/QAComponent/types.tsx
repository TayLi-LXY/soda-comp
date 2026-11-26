import type { DialogueMessage } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueMessage';


export type QAComponentWrapperProps =  {
  entity: DialogueMessage | undefined;
  index: number;
};

export type QAComponentProps = {
  entity: DialogueMessage | undefined;
  index: number;
  classNames: Record<SemanticDOM, string> | undefined;
  setClassNames: (classNames: Record<SemanticDOM, string> | undefined) => void;
  styles: Record<SemanticDOM, CSSProperties> | undefined;
  setStyles: (styles: Record<SemanticDOM, CSSProperties> | undefined) => void;
  children: React.ReactNode | undefined;
  setChildren: (children: React.ReactNode | undefined) => void;
  title: React.ReactNode;
  loading: boolean | React.ReactNode | undefined;
  defaultExpanded: boolean;
  setDefaultExpanded: (defaultExpanded: boolean) => void;
  blink: boolean;
  setBlink: (blink: boolean) => void;
  onExpand: ((expand: boolean) => void) | undefined;
  setOnExpand: (onExpand: ((expand: boolean) => void) | undefined) => void;
  thinkingProcessVisibleControl: boolean;
  setThinkingProcessVisibleControl: (thinkingProcessVisibleControl: boolean) => void;
};

