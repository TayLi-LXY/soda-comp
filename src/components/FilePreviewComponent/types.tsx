
import type { IDocument } from '@iamjariwala/react-doc-viewer';

export type FilePreviewComponentWrapperProps =  {
  documents: string[] | undefined;
};

export type FilePreviewComponentProps = {
  documents: IDocument[];
};
