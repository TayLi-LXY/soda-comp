

export type SenderComponentWrapperProps =  {
  allowSpeech: boolean | SpeechConfig;
  classNames: string | undefined;
  components: Record<'input', ComponentType> | undefined;
  defaultValue: string | undefined;
  disabled: boolean;
  loading: boolean;
  suffix: React.ReactNode | false |(oriNode: React.ReactNode,info: { components: ActionsComponents;}) => React.ReactNode | false;;
  header: React.ReactNode | false |(oriNode: React.ReactNode,info: { components: ActionsComponents;}) => React.ReactNode | false;;
  prefix: React.ReactNode | false |(oriNode: React.ReactNode,info: { components: ActionsComponents;}) => React.ReactNode | false;;
  footer: React.ReactNode | false |(oriNode: React.ReactNode,info: { components: ActionsComponents;}) => React.ReactNode | false;;
  readOnly: boolean;
  rootClassName: string | undefined;
  submitType: SubmitType | undefined;
  value: string | undefined;
  onSubmit: (message: string, slotConfig: SlotConfigType[], skill: SkillType) => void;
  onChange: (value: string, event?: React.FormEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement>, slotConfig: SlotConfigType[],skill: SkillType) => void;
  onCancel: () => void;
  onPaste: React.ClipboardEventHandler<HTMLElement>;
  onPasteFile: (files: FileList) => void;
  onKeyDown: (event: React.KeyboardEvent) => void | false;
  onFocus: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>	;
  placeholder: string | undefined;
  autoSize: boolean | { minRows?: number; maxRows?: number };
  slotConfig: any[];
  skill: any;
};

export type SenderComponentProps = {
  allowSpeech: boolean | SpeechConfig;
  classNames: string | undefined;
  components: Record<'input', ComponentType> | undefined;
  defaultValue: string | undefined;
  disabled: boolean;
  loading: boolean;
  suffix: React.ReactNode | false |(oriNode: React.ReactNode,info: { components: ActionsComponents;}) => React.ReactNode | false;;
  header: React.ReactNode | false |(oriNode: React.ReactNode,info: { components: ActionsComponents;}) => React.ReactNode | false;;
  prefix: React.ReactNode | false |(oriNode: React.ReactNode,info: { components: ActionsComponents;}) => React.ReactNode | false;;
  footer: React.ReactNode | false |(oriNode: React.ReactNode,info: { components: ActionsComponents;}) => React.ReactNode | false;;
  readOnly: boolean;
  rootClassName: string | undefined;
  submitType: SubmitType | undefined;
  value: string | undefined;
  onSubmit: (message: string, slotConfig: SlotConfigType[], skill: SkillType) => void;
  onChange: (value: string, event?: React.FormEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement>, slotConfig: SlotConfigType[],skill: SkillType) => void;
  onCancel: () => void;
  onPaste: React.ClipboardEventHandler<HTMLElement>;
  onPasteFile: (files: FileList) => void;
  onKeyDown: (event: React.KeyboardEvent) => void | false;
  onFocus: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>	;
  placeholder: string | undefined;
  autoSize: boolean | { minRows?: number; maxRows?: number };
  slotConfig: any[];
  skill: any;
};

