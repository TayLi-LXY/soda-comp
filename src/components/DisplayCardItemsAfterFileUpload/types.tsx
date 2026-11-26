import type { Actions } from './actions';
import type { UploadFile } from '@/types/com.horsecoder.platform.mall.umi.chat/displayCardItemsAfterFileUpload/UploadFile';


export type DisplayCardItemsAfterFileUploadWrapperProps =  {
  entity: UploadFile | undefined;
  index: number;
  deleteFileCallback: ((index: number) => void) | undefined;
};

export type DisplayCardItemsAfterFileUploadProps = {
  actions: Actions;
  entity: UploadFile | undefined;
  index: number;
  deleteFileCallback: ((index: number) => void) | undefined;
};

