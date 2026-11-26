import type { GetProp } from 'antd';
import type { AttachmentsProps } from '@ant-design/x';

type AttachmentsItemType = GetProp<AttachmentsProps, 'items'>[number];

export type DroppedUploadInputWrapperProps =  {
  value: string | undefined;
  placeholder: string | undefined;
  disabled: boolean;
  readOnly: boolean;
  loading: boolean;
  autoSize: boolean | { minRows?: number; maxRows?: number };
  accept: string | string[] | undefined;
  maxCount: number | undefined;
  maxSize: number | undefined;
  onInputChange: (value: string) => void;
  onSubmit: (value: string, attachments: AttachmentsItemType[]) => void;
  onCancel: () => void;
  onAttachmentsChange: (items: AttachmentsItemType[]) => void;
};

export type DroppedUploadInputProps = {
  value: string | undefined;
  placeholder: string | undefined;
  disabled: boolean;
  readOnly: boolean;
  loading: boolean;
  autoSize: boolean | { minRows?: number; maxRows?: number };
  accept: string | string[] | undefined;
  maxCount: number | undefined;
  maxSize: number | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  attachmentsItems: AttachmentsItemType[];
  onAttachmentChange: (file: any, fileList: any[]) => void;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
};
