import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';


export type DataSchemaWrapperProps =  {
  dialogueDataSchemaList: SchemaEntity[];
  selectSchemaCallback: ((entity: SchemaEntity) => void) | undefined;
};

export type DataSchemaProps = {
  dialogueDataSchemaList: SchemaEntity[];
  selectSchemaCallback: ((entity: SchemaEntity) => void) | undefined;
  dataSchemaList: any[];
  setDataSchemaList: (dataSchemaList: any[]) => void;
};

