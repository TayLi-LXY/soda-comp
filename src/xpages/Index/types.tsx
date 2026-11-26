

export type IndexWrapperProps =  {
};

export type IndexProps = {
  value: string | undefined;
  setValue: (value: string | undefined) => void;
  placeholder: string | undefined;
  setPlaceholder: (placeholder: string | undefined) => void;
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
  readOnly: boolean;
  setReadOnly: (readOnly: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  autoSize: boolean | { minRows?: number; maxRows?: number };
  setAutoSize: (autoSize: boolean | { minRows?: number; maxRows?: number }) => void;
  accept: string | string[] | undefined;
  setAccept: (accept: string | string[] | undefined) => void;
  maxCount: number | undefined;
  setMaxCount: (maxCount: number | undefined) => void;
  maxSize: number | undefined;
  setMaxSize: (maxSize: number | undefined) => void;
};

